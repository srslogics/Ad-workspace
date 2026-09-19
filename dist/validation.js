/* Validate persisted demo records before any view consumes them. */
const DemoValidation = (() => {
 const text=(v,n=120)=>typeof v==='string'&&v.trim().length>0&&v.length<=n;
 const roles=['Administrator','Campaign manager','Approver','Viewer'];
 const statuses=['Draft','In review','Active','Paused'];
 const object=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
 const number=(v,min,max)=>Number.isFinite(v)&&v>=min&&v<=max;
 function operations(s,keys,ids){
  if(!object(s)||!roles.includes(s.role)||!object(s.settings)||!text(s.settings.name)||!number(s.settings.threshold,100,1e8))return false;
  if(!Array.isArray(s.members)||s.members.length>100||!s.members.every(m=>object(m)&&text(m.name)&&text(m.email)&&roles.includes(m.role)&&['All accounts',...keys].includes(m.account)))return false;
  if(!Array.isArray(s.requests)||s.requests.length>500||!s.requests.every(r=>object(r)&&Number.isSafeInteger(r.id)&&ids.includes(r.campaign)&&number(r.before,100,1e6)&&number(r.amount,100,1e6)&&roles.includes(r.by)&&['Pending','Approved','Rejected'].includes(r.status)))return false;
  if(!object(s.groups)||!Object.entries(s.groups).every(([id,gs])=>ids.includes(Number(id))&&Array.isArray(gs)&&gs.length<=50&&gs.every(g=>object(g)&&text(g.name)&&text(g.target)&&Array.isArray(g.ads)&&g.ads.length<=100&&g.ads.every(a=>object(a)&&text(a.name)&&text(a.copy)&&text(a.creative,255)&&statuses.includes(a.status)))))return false;
  if(!object(s.health)||!Object.entries(s.health).every(([key,h])=>keys.includes(key)&&object(h)&&['Ready','Access expired — reconnect account','Sync failed — retry available'].includes(h.status)&&text(h.time)))return false;
  return Array.isArray(s.schedules)&&s.schedules.length<=100&&s.schedules.every(r=>object(r)&&text(r.name)&&text(r.email)&&text(r.client)&&['Daily at 09:00','Monday at 09:00','First of month at 09:00'].includes(r.frequency)&&typeof r.paused==='boolean');
 }
 return {operations,number};
})();
if(typeof module!=='undefined')module.exports=DemoValidation;
