import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {seed} from './lib/seed.js';
import {score,edit,confirm,publish,award,fieldKeys} from './lib/domain.js';
import {clarify} from './lib/ai.js';
const root=path.dirname(fileURLToPath(import.meta.url));
const file=process.env.DATA_FILE||path.join(root,'data','store.json');fs.mkdirSync(path.dirname(file),{recursive:true});
let db=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):seed();
function persist(){fs.writeFileSync(file+'.tmp',JSON.stringify(db,null,2));fs.renameSync(file+'.tmp',file);}persist();
function reply(res,status,data){res.writeHead(status,{'Content-Type':'application/json'});res.end(JSON.stringify(data));}
async function body(req){let text='';for await(const chunk of req){text+=chunk;if(text.length>100000)throw new Error('Request too large.');}try{return JSON.parse(text||'{}');}catch{throw new Error('Invalid JSON request.');}}
function required(x,key,min=1){if(typeof x[key]!=='string'||x[key].trim().length<min||x[key].length>5000)throw new Error(`${key} must contain ${min}–5000 characters.`);return x[key].trim();}
const server=http.createServer(async(req,res)=>{try{
 const url=new URL(req.url,'http://localhost');const route=url.pathname;
 if(route==='/api/state'&&req.method==='GET')return reply(res,200,{...db,tasks:db.tasks.map(t=>({...t,score:score(t)})),aiMode:process.env.AI_API_KEY&&process.env.AI_ENDPOINT?'live':'mock'});
 if(route.startsWith('/api/')&&req.method==='POST'){
 const input=await body(req);let result;
 if(route==='/api/clarify'){return reply(res,200,await clarify(required(input,'problem',10)));}
 if(route==='/api/tasks'){const t={id:crypto.randomUUID(),status:'draft',confirmed:{},reviewed:false,createdAt:new Date().toISOString()};for(const k of fieldKeys)t[k]='';result=edit(t,input);db.tasks.push(result);}
 else if(/^\/api\/tasks\/[^/]+\/(save|confirm|publish)$/.test(route)){
 const [, , , id,action]=route.split('/');const idx=db.tasks.findIndex(t=>t.id===id);if(idx<0)return reply(res,404,{error:'Task not found.'});const t=db.tasks[idx];result=action==='save'?edit(t,input):action==='confirm'?confirm(t):publish(t);db.tasks[idx]=result;
 }
 else if(route==='/api/proposals'){
 const task=db.tasks.find(t=>t.id===input.taskId);if(!task||task.status!=='published')throw new Error('This task is not currently published.');if(!db.teams.some(t=>t.id===input.teamId))throw new Error('Choose a valid team.');
 result={id:crypto.randomUUID(),taskId:task.id,teamId:input.teamId,idea:required(input,'idea',20),plan:required(input,'plan',20),timeline:required(input,'timeline',2),prototypeUrl:required(input,'prototypeUrl'),status:'pending',createdAt:new Date().toISOString()};
 let link;try{link=new URL(result.prototypeUrl);}catch{throw new Error('Enter a valid prototype URL.');}if(!['http:','https:'].includes(link.protocol))throw new Error('Prototype URL must use http or https.');db.proposals.push(result);
 }
 else if(route==='/api/decisions'){const p=db.proposals.find(p=>p.id===input.proposalId);if(!p||!['accepted','rejected','pending'].includes(input.status))throw new Error('Invalid proposal decision.');p.status=input.status;result=p;}
 else if(route==='/api/milestones'){result=award(db,input.proposalId,input.milestone);}
 else return reply(res,404,{error:'Unknown API endpoint.'});
 persist();return reply(res,200,result);
 }
 if(route.startsWith('/api/'))return reply(res,404,{error:'Unknown API endpoint.'});
 const assets={'/':'index.html','/app.js':'app.js','/styles.css':'styles.css'};const asset=assets[route];if(!asset){res.writeHead(404);return res.end('Not found');}
 res.writeHead(200,{'Content-Type':asset.endsWith('.js')?'text/javascript':asset.endsWith('.css')?'text/css':'text/html','X-Content-Type-Options':'nosniff'});res.end(fs.readFileSync(path.join(root,'public',asset)));
 }catch(e){reply(res,400,{error:e.message||'Something went wrong. Please try again.'});}});
server.listen(Number(process.env.PORT||3000),'127.0.0.1',()=>console.log(`Alem Bridge → http://localhost:${process.env.PORT||3000}`));
