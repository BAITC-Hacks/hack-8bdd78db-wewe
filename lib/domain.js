export const categories = [
  {key:'context',label:'Контекст и потребность',weight:20,min:20},
  {key:'data',label:'Данные и материалы',weight:20,min:20},
  {key:'outcome',label:'Ожидаемый результат',weight:15,min:20},
  {key:'criteria',label:'Критерии успеха',weight:15,min:20},
  {key:'constraints',label:'Ограничения и сроки',weight:10,min:20},
  {key:'users',label:'Целевые пользователи',weight:10,min:10},
  {key:'contact',label:'Контакт и взаимодействие',weight:10,min:10}
];
export const fieldKeys = ['title','topic',...categories.map(c=>c.key)];
export function complete(key,value) {
 const c=categories.find(c=>c.key===key); const s=(value||'').trim();
 return s.length >= (c?.min||1) && (key!=='criteria'||/\d/.test(s));
}
export function score(task) {
 const breakdown=categories.map(c=>({...c,earned:complete(c.key,task[c.key])&&task.confirmed?.[c.key]===task[c.key]?c.weight:0}));
 const total=breakdown.reduce((n,c)=>n+c.earned,0);
 const level=total<40?'Draft':total<70?'Developing':total<90?'Ready':'Priority';
 const next=total<40?40:total<70?70:total<90?90:100;
 return {total,level,next,remaining:next-total,breakdown};
}
export function edit(task,input) {
 const next={...task,confirmed:{...task.confirmed},reviewed:false};
 for(const k of fieldKeys) {if(typeof input[k]!=='string'||input[k].length>5000) throw new Error(`Поле «${categories.find(c=>c.key===k)?.label||({title:"Название",topic:"Тема"})[k]}»: введите текст не длиннее 5000 символов.`);next[k]=input[k].trim();if(next[k]!==task[k])delete next.confirmed[k];}
 if(!next.title||!next.topic)throw new Error('Укажите название и тему задачи.');
 if(task.status==='published')next.status='draft';
 return next;
}
export function confirm(task) {return {...task,confirmed:Object.fromEntries(fieldKeys.map(k=>[k,task[k]])),reviewed:true};}
export function publish(task) {if(!task.reviewed)throw new Error('Перед публикацией проверьте и подтвердите карточку.');return {...task,status:'published'};}
export function award(db,proposalId,milestone) {
 const p=db.proposals.find(p=>p.id===proposalId);if(!p||p.status!=='accepted')throw new Error('Сначала выберите принятый отклик.');
 if(!['discovery','prototype','validation'].includes(milestone))throw new Error('Неизвестный этап.');
 if(db.milestones.some(m=>m.proposalId===proposalId&&m.milestone===milestone))throw new Error('Баллы за этот этап уже начислены.');
 const record={id:crypto.randomUUID(),proposalId,teamId:p.teamId,taskId:p.taskId,milestone,points:25,verifiedAt:new Date().toISOString()};db.milestones.push(record);return record;
}
