window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="#08111f";

}else{

nav.style.background="rgba(0,0,0,.5)";

}

});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
