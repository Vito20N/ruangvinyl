const intro=document.getElementById('cinemaIntro'),shell=document.getElementById('appShell'),enter=document.getElementById('enterRoom');
enter.addEventListener('click',()=>{
if(enter.disabled)return;
enter.disabled=true;
document.body.classList.add('intro-exiting');
intro.classList.add('leaving');
const finish=()=>{
intro.hidden=true;
shell.inert=false;
shell.removeAttribute('aria-hidden');
document.body.classList.remove('intro-open','intro-exiting');
window.scrollTo({top:0,behavior:'instant'});
document.querySelector('header nav a.active')?.focus({preventScroll:true});
};
setTimeout(finish,matchMedia('(prefers-reduced-motion: reduce)').matches?0:850);
});
