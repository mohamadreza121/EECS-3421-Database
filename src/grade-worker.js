importScripts('./vendor/sql-wasm.js');
function equalCell(a,b){return typeof a==='number'&&typeof b==='number'?Math.abs(a-b)<=1e-8*Math.max(1,Math.abs(a),Math.abs(b)):a===b;}
function equalRow(a,b){return a.length===b.length&&a.every((v,i)=>equalCell(v,b[i]));}
function matches(actual,expected,ordered){if(actual.columns.length!==expected.columns.length||actual.rows.length!==expected.rows.length)return false;if(ordered)return actual.rows.every((r,i)=>equalRow(r,expected.rows[i]));const used=new Set();return actual.rows.every(r=>{const i=expected.rows.findIndex((x,i)=>!used.has(i)&&equalRow(r,x));if(i<0)return false;used.add(i);return true;});}
function query(db,sql){
  // Each attempt runs in a fresh disposable DB. Only a single result-producing
  // SELECT/WITH query is accepted; no exact-text solution matching is used.
  const cleaned=sql.replace(/\/\*[\s\S]*?\*\//g,'').replace(/--[^\n]*/g,'').trim();
  if(!/^(SELECT|WITH)\b/i.test(cleaned))throw new Error('This exercise expects a SELECT query, not a modification.');
  const before=JSON.stringify(Array.from(db.export()));
  const results=[];const it=db.iterateStatements(sql);
  try{for(const stmt of it){if(results.length)throw new Error('Submit one query for this exercise.');const columns=stmt.getColumnNames();if(!columns.length)throw new Error('A query result table is required.');const rows=[];while(stmt.step()){if(rows.length>=500)throw new Error('This answer returned over 500 rows. Check for an accidental product.');rows.push(stmt.get());}results.push({columns,rows});}}finally{it.return();}
  if(results.length!==1)throw new Error('Submit one complete query.');
  if(before!==JSON.stringify(Array.from(db.export())))throw new Error('The submitted query must not change the practice database.');
  return results[0];
}
onmessage=async({data})=>{
  let db;
  try{
    const SQL=await initSqlJs({locateFile:file=>`./vendor/${file}`});const checks=[];let preview;
    for(const v of data.variants){db=new SQL.Database();db.run(data.schemaSQL);if(v.sql)db.run(v.sql);const expected=query(db,data.solution);let actual;
      try{actual=query(db,data.sql);}catch(error){db.close();postMessage({type:'grade',correct:false,message:error.message,checks});return;}
      const pass=matches(actual,expected,data.ordered);checks.push({label:v.label,pass,actualRows:actual.rows.length,expectedRows:expected.rows.length});if(!preview)preview=actual;db.close();db=null;
    }
    postMessage({type:'grade',correct:checks.every(c=>c.pass),checks,preview,message:checks.every(c=>c.pass)?'Your result matches on all three practice datasets.':'At least one dataset differs. Recheck output columns, duplicates, NULLs, and edge cases.'});
  }catch(error){if(db)db.close();postMessage({type:'grade',correct:false,message:error.message,checks:[]});}
};
