importScripts('./vendor/sql-wasm.js');
let db;
onmessage = async ({data}) => {
  if (data.type === 'init') {
    try { const SQL = await initSqlJs({locateFile:file=>`./vendor/${file}`}); db=new SQL.Database(); db.run(data.schemaSQL); postMessage({type:'ready'}); }
    catch (error) { postMessage({type:'error',message:error.message}); }
    return;
  }
  if (data.type !== 'execute') return;
  const started=performance.now();
  try {
    if(!db)throw new Error('Database is still starting.');
    const results=[];
    const statements=db.iterateStatements(data.sql);
    try {
      for(const stmt of statements){
        const beforeChanges=db.exec('SELECT total_changes()')[0].values[0][0];
        const columns=stmt.getColumnNames();
        const rows=[];let truncated=false;
        while(stmt.step()) { if(rows.length>=200){truncated=true;break;}rows.push(stmt.get()); }
        results.push({columns,rows,truncated,changed:columns.length||db.exec('SELECT total_changes()')[0].values[0][0]===beforeChanges?0:db.getRowsModified()});
      }
    } finally { statements.return(); }
    postMessage({type:'result',results,elapsed:performance.now()-started});
  } catch(error) { postMessage({type:'error',message:error.message}); }
};
