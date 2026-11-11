import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist/vendor', { recursive: true });
await cp('src', 'dist', { recursive: true });
await cp('node_modules/sql.js/dist/sql-wasm.js', 'dist/vendor/sql-wasm.js');
await cp('node_modules/sql.js/dist/sql-wasm.wasm', 'dist/vendor/sql-wasm.wasm');
await cp('node_modules/sql.js/LICENSE', 'dist/vendor/LICENSE-sql.js.txt');
console.log('Built static study lab in dist/');
