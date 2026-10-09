// Original Cointrade development watcher. Changes recompile; refresh the browser to view them.
const fs=require('node:fs'),path=require('node:path'),{spawn,spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');let timer;const build=()=>{const result=spawnSync(process.execPath,['scripts/build.cjs'],{cwd:root,stdio:'inherit'});return result.status===0;};
if(!build())process.exit(1);
const server=spawn(process.execPath,['scripts/serve.cjs'],{cwd:root,stdio:'inherit',env:process.env});
const watchers=[];for(const name of ['app','components','templates','hooks','api','lib','platform','stores','constants','mocks','utils','types','public']){const directory=path.join(root,name);if(fs.existsSync(directory))watchers.push(fs.watch(directory,{recursive:true},(_event,file)=>{if(!file||file.endsWith('entry.generated.tsx'))return;clearTimeout(timer);timer=setTimeout(build,200);}));}
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>{watchers.forEach(watcher=>watcher.close());server.kill(signal);process.exit(0);});
server.on('exit',code=>process.exit(code||0));
