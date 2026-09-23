// Browser speech APIs are optional. Nothing listens before a user gesture.
(function(global){
 const i18n=global.AlemI18n, {tr,html}=i18n;
 const locales={ru:'ru-RU',en:'en-US',kk:'kk-KZ'};
 const help='Скажите: «каталог», «создать задачу», «отклики», «команды», «обзор», «светлая тема», «тёмная тема», «прочитай страницу» или «помощь».';
 const Recognition=global.SpeechRecognition||global.webkitSpeechRecognition;
 let open=false,mode='commands',recognition=null,lastField=null,message='',transcript='',hooks={},speechRun=0;
 const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function panel(){return html`<div id="voice-widget"><button type="button" class="btn voice-toggle" data-voice="toggle" aria-expanded="${open}" aria-controls="voice-panel">🎙 Голосовой помощник</button>${open?html`<section id="voice-panel" class="panel voice-panel" aria-label="Голосовой помощник"><div class="voice-heading"><h2>Голосовой помощник</h2><button type="button" class="btn small" data-voice="close" aria-label="Закрыть помощника">×</button></div><label for="voice-mode">Режим помощника</label><select id="voice-mode"><option value="commands" ${mode==='commands'?'selected':''}>Команды</option><option value="dictation" ${mode==='dictation'?'selected':''}>Диктовка</option></select><p class="voice-help">${escape(tr(mode==='dictation'?'Выберите поле, затем включите диктовку. Текст вставляется без отправки формы.':help))}</p><p class="voice-privacy">Микрофон включается только по кнопке. Браузер может передавать аудио своему сервису распознавания.</p>${!Recognition?html`<p class="voice-help">Распознавание речи недоступно в этом браузере. Используйте обычный ввод.</p>`:''}<div class="button-row"><button type="button" class="btn primary" data-voice="listen" ${!Recognition||recognition?'disabled':''}>${tr(recognition?'Слушаю…':'Начать запись')}</button><button type="button" class="btn" data-voice="stop">Остановить</button><button type="button" class="btn" data-voice="read">Прочитать страницу</button><button type="button" class="btn" data-voice="help">Помощь</button></div><p class="voice-status" role="status" aria-live="polite">${escape(tr(message))}</p><p class="voice-transcript" dir="auto">${escape(transcript)}</p></section>`:''}</div>`;}
 function update(){const host=document.querySelector('#voice-widget');if(host)host.outerHTML=panel();}
 function tell(text){message=text;update();}
 function stop(){if(message==='Слушаю…')message='Запись остановлена.';speechRun++;const active=recognition;recognition=null;if(active)active.abort();global.speechSynthesis?.cancel();}
 function speak(text){
  if(!global.speechSynthesis||!global.SpeechSynthesisUtterance){tell('Озвучивание недоступно в этом браузере.');return;}
  const voice=global.speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().replace('_','-').startsWith(i18n.language+'-')||v.lang===i18n.language);
  if(!voice){tell('Для выбранного языка нет голоса. Установите его в системе или выберите другой язык.');return;}
  stop();const run=speechRun;const utterance=new global.SpeechSynthesisUtterance(text);utterance.lang=locales[i18n.language];utterance.voice=voice;
  utterance.onend=()=>{if(run===speechRun)tell('Озвучивание завершено.');};utterance.onerror=event=>{if(run===speechRun&&!['interrupted','canceled'].includes(event.error))tell('Не удалось озвучить текст.');};
  global.speechSynthesis.speak(utterance);tell('Читаю страницу…');
 }
 function read(){const main=document.querySelector('main');if(main)speak(main.innerText.slice(0,3500));}
 function command(text){
  const value=text.toLocaleLowerCase().trim().replace(/[.!?,;:]+$/u,'');
  const routes={dashboard:['обзор','кабинет','overview','dashboard','шолу'],catalog:['каталог','каталог задач','catalog','open catalog','міндеттер каталогы'],new:['создать задачу','новая задача','create task','new task','міндет құру','жаңа міндет'],review:['отклики','proposals','ұсыныстар'],teams:['команды','teams','командалар']};
  for(const [route,names] of Object.entries(routes))if(names.includes(value)){
   if(route==='new'&&hooks.role()!=='business'){tell('Для создания задачи переключитесь в режим бизнеса.');return;}
   hooks.navigate(route);tell('Переход выполнен.');return;
  }
  if(['светлая тема','light mode','light theme','жарық тақырып'].includes(value)){hooks.theme('light');tell('Тема изменена.');return;}
  if(['тёмная тема','темная тема','dark mode','dark theme','қараңғы тақырып'].includes(value)){hooks.theme('dark');tell('Тема изменена.');return;}
  if(['прочитай страницу','read page','бетті оқы'].includes(value)){read();return;}
  if(['помощь','help','көмек'].includes(value)){speak(tr(help));return;}
  tell('Команда не распознана. Откройте помощь или выберите диктовку.');
 }
 function listen(){
  if(!Recognition||recognition)return;
  const target=lastField,dictation=mode==='dictation';
  if(dictation&&(!target?.isConnected||target.disabled||target.readOnly)){tell('Сначала выберите текстовое поле на странице.');return;}
  const originalValue=dictation?target.value:null;
  const selection=dictation?{start:target.selectionStart??target.value.length,end:target.selectionEnd??target.value.length}:null;
  global.speechSynthesis?.cancel();const active=new Recognition();recognition=active;active.lang=locales[i18n.language];active.continuous=false;active.interimResults=false;
  active.onresult=event=>{
   if(recognition!==active)return;
   const text=event.results[0]?.[0]?.transcript?.trim();if(!text){tell('Не удалось распознать речь. Попробуйте ещё раз.');return;}
   transcript=text;
   if(!dictation){command(text);update();return;}
   if(!target.isConnected||target.disabled||target.readOnly){tell('Поле больше недоступно. Выберите его снова.');return;}
   if(target.value!==originalValue){tell('Поле изменилось во время записи. Текст не вставлен; повторите диктовку.');return;}
   const before=target.value.slice(0,selection.start),after=target.value.slice(selection.end);
   const insertion=(before&&!/\s$/.test(before)?' ':'')+text+(after&&!/^\s/.test(after)?' ':'');
   const available=target.maxLength>=0?Math.max(0,target.maxLength-before.length-after.length):insertion.length;
   target.value=before+insertion.slice(0,available)+after;
   target.dispatchEvent(new Event('input',{bubbles:true}));
   if(target.isConnected){target.focus();try{target.setSelectionRange?.(before.length+Math.min(insertion.length,available),before.length+Math.min(insertion.length,available));}catch{/* URL inputs do not expose a text selection. */}}
   tell(available<insertion.length?'Поле заполнено до максимальной длины.':'Текст добавлен в поле. Проверьте его перед сохранением.');
  };
  active.onerror=event=>{
   if(recognition!==active)return;
   const errors={'not-allowed':'Разрешите доступ к микрофону в настройках браузера.','service-not-allowed':'Разрешите доступ к микрофону в настройках браузера.','audio-capture':'Микрофон не найден или недоступен.','network':'Ошибка сети при распознавании речи.','language-not-supported':'Этот язык распознавания недоступен в вашем браузере.','no-speech':'Не удалось распознать речь. Попробуйте ещё раз.'};
   tell(errors[event.error]||'Не удалось включить распознавание речи.');
  };
  active.onend=()=>{if(recognition!==active)return;recognition=null;if(message==='Слушаю…')message='Запись остановлена.';update();};
  try{active.start();tell('Слушаю…');}catch{recognition=null;tell('Не удалось включить распознавание речи.');}
 }
 document.addEventListener('focusin',event=>{if(event.target.matches?.('main textarea, main input:not([type]), main input[type="text"], main input[type="search"], main input[type="url"]'))lastField=event.target;});
 document.addEventListener('click',event=>{
  const action=event.target.closest('[data-voice]')?.dataset.voice;if(!action)return;
  if(action==='toggle'){open=!open;if(!open)stop();update();}
  if(action==='close'){stop();open=false;update();document.querySelector('[data-voice="toggle"]')?.focus();}
  if(action==='listen')listen();
  if(action==='stop'){stop();tell('Запись остановлена.');}
  if(action==='read')read();
  if(action==='help'){message=help;update();}
 });
 document.addEventListener('change',event=>{if(event.target.id==='voice-mode'){stop();mode=event.target.value;message='';update();}});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&open){stop();open=false;update();}});
 global.addEventListener('pagehide',stop);
 global.addEventListener('hashchange',stop);
 global.AlemVoice={panel,init(value){hooks=value;},stop,reset(){stop();message='';transcript='';update();}};
})(window);
