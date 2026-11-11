import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import initSqlJs from 'sql.js';
import {schemaSQL,commands,examples,questions,lectures} from '../src/content.js';
const SQL=await initSqlJs();
const source=await readFile(new URL('../src/sql-worker.js',import.meta.url),'utf8');
async function sandbox(){
  const output=[];
  const ctx=vm.createContext({performance,importScripts(){},initSqlJs:async()=>SQL,postMessage:data=>output.push(data),onmessage:null});
  vm.runInContext(source,ctx);
  await ctx.onmessage({data:{type:'init',schemaSQL}});
  assert.equal(output.pop().type,'ready');
  return async sql=>{await ctx.onmessage({data:{type:'execute',sql}});return output.pop();};
}
test('actual worker returns ordered student results',async()=>{
  const run=await sandbox();const result=await run('SELECT name,year FROM students WHERE year >= 3 ORDER BY name;');
  assert.equal(result.type,'result');assert.deepEqual(Array.from(result.results[0].rows,r=>Array.from(r)),[['Aisha',3],['Noah',4],['Reza',3]]);
});
test('worker supports mutations, constraints, errors, and recovery',async()=>{
  const run=await sandbox();
  assert.equal((await run("INSERT INTO students VALUES(6,'Sam',NULL,2);")).type,'result');
  assert.equal((await run("SELECT COUNT(*) FROM students;")).results[0].rows[0][0],6);
  assert.equal((await run("INSERT INTO enrollments VALUES(999,'EECS3421');")).type,'error');
  assert.equal((await run('SELECT missing FROM students;')).type,'error');
  assert.equal((await run('SELECT 42 AS answer;')).results[0].rows[0][0],42);
});
test('worker handles multiple statements and caps results',async()=>{
  const run=await sandbox();
  assert.equal((await run('SELECT 1; SELECT 2;')).results.length,2);
  const result=await run('WITH RECURSIVE n(x) AS (VALUES(1) UNION ALL SELECT x+1 FROM n WHERE x<300) SELECT x FROM n;');
  assert.equal(result.results[0].rows.length,200);assert.equal(result.results[0].truncated,true);
  assert.equal((await run('SELECT 1;')).type,'result');
});
test('every command and worked example runs in a fresh demo database',async()=>{
  for(const item of [...commands.map(c=>({name:c.name,sql:c.example})),...examples.map(e=>({name:e.title,sql:e.sql}))]){
    const run=await sandbox();const result=await run(item.sql);assert.equal(result.type,'result',`${item.name}: ${result.message}`);
  }
});
test('demo output question and lecture placeholders match the actual seed',async()=>{
  const run=await sandbox();assert.equal((await run(questions[1].code)).results[0].rows.length,3);
  assert.equal(questions[1].options[questions[1].answer],'3');
  assert.equal(lectures.length,7);assert.ok(lectures.every(l=>l.source===null&&l.status==='awaiting'));
});
