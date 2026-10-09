// Original Cointrade browser compiler. TypeScript compiles source; no third-party bundler code.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),Module=require('node:module'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),out=path.join(root,'build');fs.mkdirSync(out,{recursive:true});
const files=[],ids=new Map(),styles=new Set(),moduleCss=new Map();
const roots=['app','components','templates','hooks','api','lib','platform','stores','constants','mocks','utils','types'];
const resolveFile=p=>{for(const file of [p,p+'.tsx',p+'.ts',p+'.js',p+'.mjs',p+'.cjs',p+'.json',path.join(p,'index.tsx'),path.join(p,'index.ts'),path.join(p,'index.js')])if(fs.existsSync(file)&&fs.statSync(file).isFile())return file;};
function packageInfo(file){for(let dir=path.dirname(file);dir!==path.dirname(dir);dir=path.dirname(dir)){const p=path.join(dir,'package.json');if(fs.existsSync(p))return {dir,pkg:JSON.parse(fs.readFileSync(p,'utf8'))};}}
function resolve(name,parent){
 if(Module.builtinModules.includes(name)||name.startsWith('node:'))throw Error(`Browser code requires unsupported Node module ${name} from ${parent}`);
 if(name.startsWith('@/'))return resolveFile(path.join(root,name.slice(2)))||fail(name,parent);
 if(name.startsWith('.')){let target=resolveFile(path.resolve(path.dirname(parent),name));const info=packageInfo(parent);if(info?.pkg.browser&&typeof info.pkg.browser==='object'&&target){const key='./'+path.relative(info.dir,target).replaceAll(path.sep,'/');if(info.pkg.browser[key]===false)return '\0empty';if(typeof info.pkg.browser[key]==='string')target=resolveFile(path.join(info.dir,info.pkg.browser[key]));}return target||fail(name,parent);}
 const local=resolveFile(path.join(root,name));if(local&&roots.includes(name.split('/')[0]))return local;
 const require=Module.createRequire(parent);
 if(name==='axios')return path.join(root,'node_modules/axios/dist/browser/axios.cjs');
 let target=require.resolve(name);const info=packageInfo(target);
 if(info&&typeof info.pkg.browser==='string'&&(name===info.pkg.name))target=resolveFile(path.join(info.dir,info.pkg.browser))||target;
 if(info&&typeof info.pkg.browser==='object'){const key='./'+path.relative(info.dir,target).replaceAll(path.sep,'/');if(info.pkg.browser[key]===false)return '\0empty';if(typeof info.pkg.browser[key]==='string')target=resolveFile(path.join(info.dir,info.pkg.browser[key]))||target;}
 return target;
}
function fail(name,parent){throw Error(`Cannot resolve ${name} from ${parent}`);}
function add(file){
 if(ids.has(file))return ids.get(file);const id=files.length;ids.set(file,id);files.push({file,code:''});
 if(file==='\0empty'){files[id].code='module.exports={};';return id;}
 if(file.endsWith('.css')){
  if(file.endsWith('.module.css')){const text=fs.readFileSync(file,'utf8'),prefix='ct'+crypto.createHash('sha256').update(path.relative(root,file)).digest('hex').slice(0,8)+'_',names={};const css=text.replace(/\.([a-zA-Z_][a-zA-Z0-9_-]*)/g,(_,name)=>{names[name]=prefix+name;return '.'+prefix+name;});moduleCss.set(file,css);files[id].code='module.exports='+JSON.stringify(names)+';';}
  else if(!file.endsWith('/app/globals.css'))styles.add(file);
  return id;
 }
 if(file.endsWith('.json')){files[id].code='module.exports='+fs.readFileSync(file,'utf8')+';';return id;}
 const source=fs.readFileSync(file,'utf8');
 const env={NODE_ENV:'production',NEXT_PUBLIC_API_URL:process.env.NEXT_PUBLIC_API_URL||'http://localhost:4000'};
 for(const [name,value] of Object.entries(process.env))if(name.startsWith('NEXT_PUBLIC_'))env[name]=value;
 let code=ts.transpileModule(source,{fileName:file,compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,allowJs:true,removeComments:false,sourceMap:false},transformers:{before:[context=>source=>{
  function visit(node){if(ts.isPropertyAccessExpression(node)&&ts.isPropertyAccessExpression(node.expression)&&node.expression.getText(source)==='process.env'){const value=env[node.name.text];return value===undefined?context.factory.createIdentifier('undefined'):context.factory.createStringLiteral(value);}return ts.visitEachChild(node,visit,context);}return ts.visitNode(source,visit);
 }]}}).outputText;
 const ast=ts.createSourceFile(file,code,ts.ScriptTarget.Latest,true,ts.ScriptKind.JS),replacements=[];
 function walk(node){if(ts.isCallExpression(node)&&ts.isIdentifier(node.expression)&&node.expression.text==='require'){if(node.arguments.length!==1||!ts.isStringLiteral(node.arguments[0]))throw Error(`Dynamic require is not supported: ${file}`);const dependency=add(resolve(node.arguments[0].text,file));replacements.push([node.arguments[0].getStart(ast),node.arguments[0].getEnd(),String(dependency)]);}ts.forEachChild(node,walk);}walk(ast);
 for(const [start,end,value] of replacements.sort((a,b)=>b[0]-a[0]))code=code.slice(0,start)+value+code.slice(end);
 files[id].code=code;return id;
}
function collect(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(item=>item.isDirectory()?collect(path.join(dir,item.name)):item.name==='page.tsx'?[path.join(dir,item.name)]:[]);}
const pages=collect(path.join(root,'app')).sort((a,b)=>{const pa=path.relative(root,a),pb=path.relative(root,b);return (pa.match(/\[/g)||[]).length-(pb.match(/\[/g)||[]).length||pb.length-pa.length;});
const routes=pages.map(file=>{const parts=path.relative(path.join(root,'app'),path.dirname(file)).split(path.sep).filter(part=>part&&part!=='.');const params=[];const pattern=parts.map(part=>{if(part.startsWith('[')){params.push(part.slice(1,-1));return '([^/]+)';}return part.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}).join('/');const layouts=[];for(let dir=path.dirname(file);dir!==path.join(root,'app');dir=path.dirname(dir)){const layout=path.join(dir,'layout.tsx');if(fs.existsSync(layout))layouts.push('./'+path.relative(root,layout).replaceAll(path.sep,'/'));}return {pattern:'^/'+pattern+'/?$',params,module:'./'+path.relative(root,file).replaceAll(path.sep,'/'),layouts};});
const entry=path.join(root,'platform/entry.generated.tsx');
fs.writeFileSync(entry,`import React,{useEffect,useState} from 'react';\nimport {createRoot} from 'react-dom/client';\nimport Root from '../app/layout';\nimport {RouteContext,Redirect,MissingRoute} from './navigation';\nimport NotFound from '../app/not-found';\nconst routes=[${routes.map(route=>`{pattern:new RegExp(${JSON.stringify(route.pattern)}),params:${JSON.stringify(route.params)},page:require(${JSON.stringify('../'+route.module.slice(2))}),layouts:[${route.layouts.map(layout=>`require(${JSON.stringify('../'+layout.slice(2))}).default`).join(',')}]}`).join(',')}];\nclass Boundary extends React.Component<any,{error:any}>{state={error:null as any};static getDerivedStateFromError(error:any){return {error};}componentDidCatch(error:any){if(error instanceof Redirect)location.replace(error.url);}render(){if(this.state.error)return this.state.error instanceof Redirect?null:this.state.error instanceof MissingRoute?<NotFound/>:<p role="alert">This page is unavailable. Please reload.</p>;return this.props.children;}}\nfunction App(){const [url,setUrl]=useState(location.pathname+location.search);useEffect(()=>{const update=()=>setUrl(location.pathname+location.search);window.addEventListener('popstate',update);return()=>window.removeEventListener('popstate',update);},[]);const path=location.pathname;let content:any=<NotFound/>,params:Record<string,string>={};let route:any;for(const item of routes){const match=item.pattern.exec(path);if(match){route=item;try{item.params.forEach((name:string,index:number)=>params[name]=decodeURIComponent(match[index+1]));}catch{route=undefined;}break;}}if(route){content=React.createElement(route.page.default,{params});for(const Layout of route.layouts)content=React.createElement(Layout,{},content);}useEffect(()=>{const metadata=route?.page.generateMetadata?.({params})||route?.page.metadata;document.title=typeof metadata?.title==='string'?metadata.title:'Cointrade | Built for Coinbase users';},[url]);return <Boundary key={url}><RouteContext.Provider value={{params,path}}><Root>{content}</Root></RouteContext.Provider></Boundary>;}\ncreateRoot(document.getElementById('root')!).render(<App/>);\n`);
const entryId=add(entry);
const bundle=`/* Cointrade native browser bundle. Included module license comments are preserved. */\n(function(){'use strict';const modules={${files.map((item,id)=>JSON.stringify(id)+':function(module,exports,require){\n'+item.code+'\n}').join(',\n')}};const cache={};function load(id){if(cache[id])return cache[id].exports;const module=cache[id]={exports:{}};modules[id](module,module.exports,load);return module.exports;}load(${entryId});})();\n`;
fs.writeFileSync(path.join(out,'app.js'),bundle);
const packages=new Map();for(const item of files){if(item.file.includes('/node_modules/')){const info=packageInfo(item.file);if(info)packages.set(info.dir,info.pkg);}}
let notices='Cointrade browser dependency notices. Source-level certification remains subject to the release audit.\n';
for(const [directory,pkg] of packages){notices+='\n--- '+pkg.name+'@'+pkg.version+' ---\n';for(const name of fs.readdirSync(directory)){if(/^(LICENSE|LICENCE|COPYING|NOTICE)([.-]|$)/i.test(name)&&fs.statSync(path.join(directory,name)).isFile())notices+=fs.readFileSync(path.join(directory,name),'utf8')+'\n';}}
notices+='\n--- Preserved Tailwind CSS output license ---\n'+fs.readFileSync(path.join(root,'public/assets/TAILWIND-LICENSE.txt'),'utf8');
fs.writeFileSync(path.join(out,'THIRD_PARTY_NOTICES.txt'),notices);

const css=fs.readFileSync(path.join(root,'public/assets/cointrade.css'),'utf8')+'\n'+[...styles].map(file=>fs.readFileSync(file,'utf8')).join('\n')+'\n'+[...moduleCss.values()].join('\n');fs.writeFileSync(path.join(out,'app.css'),css);
fs.writeFileSync(path.join(out,'routes.json'),JSON.stringify(routes.map(({module,layouts,...route})=>route),null,2));
fs.writeFileSync(path.join(out,'index.html'),'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Cointrade | Built for Coinbase users</title><meta name="description" content="Trading strategies and automation for your own Coinbase account."><link rel="icon" href="/cointrade-icon.png"><link rel="stylesheet" href="/app.css"></head><body class="bg-theme-n-8 font-sans text-theme-primary antialiased"><div id="root"></div><script src="/app.js" defer></script></body></html>');
console.log(`Built ${routes.length} routes and ${files.length} modules using the native TypeScript compiler.`);
