import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import {seed} from '../lib/seed.js';
import {score} from '../lib/domain.js';

test('browser rendering paths, catalog filters/order, escaped content, and role actions',async()=>{
 const db=seed();const state={...db,aiMode:'mock',tasks:db.tasks.map(t=>({...t,score:score(t)}))};
 const root={innerHTML:''};const document={documentElement:{dataset:{}},querySelector:()=>root,querySelectorAll:()=>[],addEventListener:()=>{}};
 const location={hash:'#dashboard'};
 const context=vm.createContext({document,location,window:{addEventListener:()=>{},scrollTo:()=>{}},localStorage:{getItem:()=>null,setItem:()=>{}},fetch:async()=>({ok:true,json:async()=>state}),setTimeout:()=>{},URL,FormData});
 for(const file of ['i18n.js','voice.js'])new vm.Script(await fs.readFile(new URL('../public/'+file,import.meta.url),'utf8')).runInContext(context);
 const source=await fs.readFile(new URL('../public/app.js',import.meta.url),'utf8');
 const ui=await new vm.Script(`(async()=>{${source}\nreturn {render, setRole:r=>role=r, setFilters:f=>filters={...filters,...f}, setWizard:w=>wizard=w};})()`).runInContext(context);
 for(const [language,heading] of [['en','Big ideas. Clear next steps.'],['kk','Үлкен идеялар. Нақты қадамдар.'],['ru','Большие идеи. Понятные шаги.']]){context.window.AlemI18n.setLanguage(language);ui.render();assert.ok(root.innerHTML.includes(heading));assert.equal(document.documentElement.lang,language);}
 assert.match(root.innerHTML,/Большие идеи\. Понятные шаги\./);
 for(const language of ['en','kk','ru']){context.window.AlemI18n.setLanguage(language);
 for(const page of ['catalog','new','task/task-1','edit/task-1','proposal/task-1','review','review/task-1','teams']){location.hash='#'+page;ui.render();assert.ok(root.innerHTML.length>1000,page);assert.doesNotMatch(root.innerHTML,/undefined/);if(language==='en')assert.doesNotMatch(root.innerHTML.replace(/<option value="(?:ru|kk)"[^>]*>[^<]*<\/option>/g,''),/[А-Яа-яЁё]/,page);}}
 location.hash='#catalog';ui.render();let previous=-1;for(const id of ['task-1','task-2','task-3','task-4','task-5']){const pos=root.innerHTML.indexOf(`href="#task/${id}"`);assert.ok(pos>previous);previous=pos;}
 assert.match(root.innerHTML, /value="Draft"[^>]*>Черновик/);assert.match(root.innerHTML, /value="Retail"[^>]*>Торговля/);
 ui.setFilters({level:'Draft'});ui.render();assert.match(root.innerHTML,/Черновик · Требует уточнения/);assert.match(root.innerHTML,/href="#task\/task-5"/);assert.doesNotMatch(root.innerHTML,/href="#task\/task-1"/);
 ui.setFilters({level:'All levels',topic:'Retail'});ui.render();assert.match(root.innerHTML,/href="#task\/task-1"/);assert.doesNotMatch(root.innerHTML,/href="#task\/task-5"/);
 ui.setRole('student');location.hash='#task/task-5';ui.render();assert.match(root.innerHTML,/Отправить отклик/);assert.doesNotMatch(root.innerHTML,/Подтвердить карточку/);
 state.tasks[0].title='<script>alert("x")</script>';location.hash='#task/task-1';ui.render();assert.match(root.innerHTML,/&lt;script&gt;/);assert.doesNotMatch(root.innerHTML,/<script>alert/);
 ui.setRole('business');location.hash='#new';ui.setWizard({problem:'Our shop needs help',questions:[{key:'data',question:'What data is available?'}],notice:'Mock mode'});ui.render();assert.match(root.innerHTML,/answers-form/);
 ui.setWizard({stage:'edit',answers:{context:'Our shop needs help'}});ui.render();assert.match(root.innerHTML,/edit-form/);assert.match(root.innerHTML,/Our shop needs help/);
});
