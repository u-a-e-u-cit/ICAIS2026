const toggle=document.querySelector('.menu-toggle');
const header=document.querySelector('.main-header');
if(toggle&&header){toggle.addEventListener('click',()=>header.classList.toggle('nav-open'));}
