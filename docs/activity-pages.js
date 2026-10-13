
'use strict';
const shareButton=document.getElementById('activity-share');
function notify(message){const t=document.getElementById('activity-toast');t.textContent=message;t.classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>t.classList.remove('show'),3500);}
shareButton.addEventListener('click',async()=>{const u=new URL(location.href);u.hash='';const data={title:document.title,url:u.href};try{if(navigator.share){await navigator.share(data);return;}}catch(e){if(e.name==='AbortError')return;}try{await navigator.clipboard.writeText(u.href);notify('Page link copied — ready for the group chat');}catch(e){window.prompt('Copy this page link:',u.href);}});
document.addEventListener('click',event=>{if(event.target.closest('a[href="#activity-credits"]'))document.getElementById('activity-credits').open=true;});
