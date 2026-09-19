/* Keyboard and semantic support for dynamically rendered demo views. */
(()=>{
const apply=()=>{
 document.querySelectorAll('th').forEach(el=>{el.scope='col';if(!el.textContent.trim())el.textContent='Actions'});
 document.querySelectorAll('.table-wrap').forEach(el=>{el.tabIndex=0;el.setAttribute('role','region');el.setAttribute('aria-label','Scrollable data table')});
 document.querySelectorAll('nav svg,.platform,.big-icon,.logo').forEach(el=>el.setAttribute('aria-hidden','true'));
 document.querySelectorAll('.op-media').forEach(el=>{if(el.tagName==='VIDEO')el.setAttribute('aria-label','Local uploaded video preview')});
 document.querySelectorAll('.account-tile').forEach(card=>card.querySelectorAll('button').forEach(b=>b.setAttribute('aria-label',b.textContent.trim()+' — '+card.querySelector('h2').textContent+' '+card.querySelector('small').textContent)));
};
new MutationObserver(apply).observe(document.querySelector('#main'),{childList:true,subtree:true});
new MutationObserver(apply).observe(document.querySelector('#dialog'),{childList:true,subtree:true});
apply();
const toggle=document.querySelector('.mobile-toggle'),side=document.querySelector('aside');
side.id='workspace-sidebar';toggle.setAttribute('aria-controls',side.id);
document.addEventListener('keydown',e=>{
 if(!document.body.classList.contains('menu-open')||!matchMedia('(max-width:850px)').matches)return;
 if(e.key==='Escape'){toggle.focus();return}
 if(e.key==='Tab'){
  const items=[...side.querySelectorAll('a,button'),toggle].filter(x=>!x.disabled&&x.getClientRects().length);
  const index=items.indexOf(document.activeElement);
  if(e.shiftKey&&(index<=0)){e.preventDefault();items.at(-1).focus()}
  else if(!e.shiftKey&&(index===items.length-1||index===-1)){e.preventDefault();items[0].focus()}
 }
},true);
toggle.addEventListener('click',()=>{if(document.body.classList.contains('menu-open'))side.querySelector('a').focus()});
})();
