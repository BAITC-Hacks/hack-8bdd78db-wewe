import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';

const sources=await Promise.all(['i18n.js','voice.js','app.js'].map(name=>fs.readFile(new URL('../public/'+name,import.meta.url),'utf8')));
function setup({speech=true,storage=new Map(),forms=[]}={}){
 const listeners={},recognitions=[],spoken=[],navigations=[],root={innerHTML:''},widget={outerHTML:''};
 const document={documentElement:{dataset:{}},title:'',
  querySelector:s=>s==='#app'?root:s==='#voice-widget'?widget:s==='main'?{innerText:'Test content'}:null,
  querySelectorAll:()=>forms,getElementById:id=>forms.find(form=>form.id===id),
  addEventListener:(type,fn)=>(listeners[type]??=[]).push(fn)};
 class Recognition{constructor(){recognitions.push(this);}start(){this.started=true;}abort(){this.aborted=true;this.onend?.();}}
 const context=vm.createContext({document,window:{addEventListener(){},scrollTo(){},...(speech?{SpeechRecognition:Recognition}:{}),speechSynthesis:{cancel(){},getVoices:()=>[{lang:'en-US'},{lang:'ru-RU'}],speak:u=>spoken.push(u)},SpeechSynthesisUtterance:class{constructor(text){this.text=text;}}},localStorage:{getItem:key=>storage.get(key),setItem:(key,value)=>storage.set(key,value)},Event:class{constructor(type,options){this.type=type;Object.assign(this,options);}},setTimeout(){},URL,FormData,location:{hash:'#dashboard'}});
 for(const source of sources.slice(0,2))new vm.Script(source).runInContext(context);
 const i18n=context.window.AlemI18n,voice=context.window.AlemVoice;
 voice.init({role:()=> 'business',navigate:value=>navigations.push(value),theme:value=>i18n.setTheme(value)});
 const emit=(type,target)=>(listeners[type]||[]).map(fn=>fn({target}));
 const click=action=>emit('click',{closest:selector=>selector==='[data-voice]'?{dataset:{voice:action}}:null});
 return {context,document,recognitions,spoken,navigations,i18n,voice,emit,click,storage,root};
}

test('language and theme survive reload, translate UI literals, and preserve interpolated content',()=>{
 const first=setup();first.i18n.setLanguage('kk');first.i18n.setTheme('light');
 assert.equal(first.document.documentElement.dataset.theme,'light');
 const second=setup({storage:first.storage});assert.equal(second.i18n.language,'kk');assert.equal(second.i18n.theme,'light');
 assert.equal(second.i18n.tr('Создать задачу'),'Міндет құру');
 second.i18n.setLanguage('en');assert.equal(second.i18n.html`<p>Бизнес ${'Бизнес <user text>'}</p>`,'<p>Business Бизнес <user text></p>');
 second.i18n.setLanguage('unsupported');assert.equal(second.i18n.language,'en');
});

test('switching languages preserves unsaved form values and normalizes topic labels',async()=>{
 const controls=[{name:'title',value:'Мой несохранённый заголовок'},{name:'context',value:'<script>user content</script>'},{name:'topic',value:'Торговля'}];
 controls.namedItem=name=>controls.find(control=>control.name===name);
 const form={id:'edit-form',elements:controls,querySelector:()=>null};
 const app=setup({forms:[form]});app.context.fetch=async()=>({ok:true,json:async()=>({tasks:[],teams:[],proposals:[],milestones:[],aiMode:'mock'})});
 const ui=await new vm.Script(`(async()=>{${sources[2]}\nreturn {changeLanguage};})()`).runInContext(app.context);
 await ui.changeLanguage('en');assert.equal(controls[0].value,'Мой несохранённый заголовок');assert.equal(controls[1].value,'<script>user content</script>');assert.equal(controls[2].value,'Retail');
 await ui.changeLanguage('kk');assert.equal(controls[2].value,'Сауда');
 assert.ok(app.root.innerHTML.includes('Міндеттер каталогы'));
});

test('voice starts only on demand, uses selected language, supports navigation, and ignores unsafe commands',()=>{
 const app=setup();assert.equal(app.recognitions.length,0);app.i18n.setLanguage('kk');app.click('listen');
 const recognition=app.recognitions[0];assert.equal(recognition.lang,'kk-KZ');assert.equal(recognition.started,true);
 recognition.onresult({results:[[{transcript:'каталог'}]]});assert.deepEqual(app.navigations,['catalog']);
 recognition.onresult({results:[[{transcript:'опубликовать задачу'}]]});assert.equal(app.navigations.length,1);
 app.click('stop');assert.equal(recognition.aborted,true);
 recognition.onresult({results:[[{transcript:'команды'}]]});assert.equal(app.navigations.length,1);
});

test('dictation inserts at the selected position, respects length, and never submits',()=>{
 const app=setup();const field={value:'Hello world',selectionStart:6,selectionEnd:11,maxLength:18,isConnected:true,matches:()=>true,focus(){},setSelectionRange(){},dispatchEvent(event){assert.equal(event.type,'input');}};
 app.emit('focusin',field);app.emit('change',{id:'voice-mode',value:'dictation'});app.click('listen');
 app.recognitions[0].onresult({results:[[{transcript:'beautiful people'}]]});assert.equal(field.value,'Hello beautiful pe');
 app.click('stop');field.isConnected=false;app.click('listen');assert.equal(app.recognitions.length,1);
});

test('voice gracefully handles missing support, permission errors, and unavailable Kazakh synthesis',()=>{
 const unsupported=setup({speech:false});unsupported.click('toggle');assert.match(unsupported.voice.panel(),/Распознавание речи недоступно/);unsupported.click('listen');assert.equal(unsupported.recognitions.length,0);
 const app=setup();app.click('toggle');app.click('listen');app.recognitions[0].onerror({error:'not-allowed'});assert.match(app.voice.panel(),/Разрешите доступ к микрофону/);
 app.click('stop');app.i18n.setLanguage('kk');app.click('read');assert.equal(app.spoken.length,0);assert.match(app.voice.panel(),/дауысы орнатылмаған/);
 app.i18n.setLanguage('en');app.click('read');assert.equal(app.spoken[0].lang,'en-US');
});


test('closing voice clears listening status and late dictation never overwrites manual edits',()=>{
 const app=setup();app.click('toggle');app.click('listen');assert.match(app.voice.panel(),/Слушаю…/);
 app.click('close');app.click('toggle');assert.doesNotMatch(app.voice.panel(),/Слушаю…/);assert.match(app.voice.panel(),/Запись остановлена/);
 const field={value:'Начало',selectionStart:6,selectionEnd:6,maxLength:100,isConnected:true,matches:()=>true,focus(){},setSelectionRange(){},dispatchEvent(){}};
 app.emit('focusin',field);app.emit('change',{id:'voice-mode',value:'dictation'});app.click('listen');
 field.value='Новый текст, введённый вручную';app.recognitions.at(-1).onresult({results:[[{transcript:'Ответ диктовки'}]]});
 assert.equal(field.value,'Новый текст, введённый вручную');assert.match(app.voice.panel(),/Поле изменилось во время записи/);
});
