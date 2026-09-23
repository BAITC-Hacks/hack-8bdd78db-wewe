import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import {seed} from '../lib/seed.js';
import {score} from '../lib/domain.js';

test('browser rendering paths, catalog filters/order, escaped content, and role actions',async()=>{
 const db=seed();const state={...db,aiMode:'mock',tasks:db.tasks.map(t=>({...t,score:score(t)}))};
 const root={innerHTML:''};const document={querySelector:()=>root,addEventListener:()=>{}};
 const location={hash:'#dashboard'};
 const context=vm.createContext({document,location,window:{addEventListener:()=>{},scrollTo:()=>{}},localStorage:{getItem:()=>null,setItem:()=>{}},fetch:async()=>({ok:true,json:async()=>state}),setTimeout:()=>{},URL,FormData});
 const source=await fs.readFile(new URL('../public/app.js',import.meta.url),'utf8');
 const ui=await new vm.Script(`(async()=>{${source}\nreturn {render, setRole:r=>role=r, setFilters:f=>filters={...filters,...f}, setWizard:w=>wizard=w};})()`).runInContext(context);
 assert.match(root.innerHTML,/Big ideas\. Clear next steps\./);
 for(const page of ['catalog','new','task/task-1','edit/task-1','proposal/task-1','review','review/task-1','teams']){location.hash='#'+page;ui.render();assert.ok(root.innerHTML.length>1000,page);assert.doesNotMatch(root.innerHTML,/undefined/);}
 location.hash='#catalog';ui.render();let previous=-1;for(const id of ['task-1','task-2','task-3','task-4','task-5']){const pos=root.innerHTML.indexOf(`href="#task/${id}"`);assert.ok(pos>previous);previous=pos;}
 ui.setFilters({level:'Draft'});ui.render();assert.match(root.innerHTML,/href="#task\/task-5"/);assert.doesNotMatch(root.innerHTML,/href="#task\/task-1"/);
 ui.setFilters({level:'All levels',topic:'Retail'});ui.render();assert.match(root.innerHTML,/href="#task\/task-1"/);assert.doesNotMatch(root.innerHTML,/href="#task\/task-5"/);
 ui.setRole('student');location.hash='#task/task-5';ui.render();assert.match(root.innerHTML,/Submit a proposal/);assert.doesNotMatch(root.innerHTML,/Confirm reviewed card/);
 state.tasks[0].title='<script>alert("x")</script>';location.hash='#task/task-1';ui.render();assert.match(root.innerHTML,/&lt;script&gt;/);assert.doesNotMatch(root.innerHTML,/<script>alert/);
 ui.setRole('business');location.hash='#new';ui.setWizard({problem:'Our shop needs help',questions:[{key:'data',question:'What data is available?'}],notice:'Mock mode'});ui.render();assert.match(root.innerHTML,/answers-form/);
 ui.setWizard({stage:'edit',answers:{context:'Our shop needs help'}});ui.render();assert.match(root.innerHTML,/edit-form/);assert.match(root.innerHTML,/Our shop needs help/);
});
