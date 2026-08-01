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
function sendWhatsApp(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let email=document.getElementById("email").value;
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;
let service=document.getElementById("service").value;
let message=document.getElementById("message").value;

let text =
`📅 *New Appointment Request*

👤 Name: ${name}

📞 Mobile: ${phone}

📧 Email: ${email}

📅 Date: ${date}

⏰ Time: ${time}

💼 Service: ${service}

📝 Message: ${message}`;

window.open(
`https://wa.me/918511938888?text=${encodeURIComponent(text)}`,
"_blank"
);

function sendWhatsApp(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let email=document.getElementById("email").value;
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;
let service=document.getElementById("service").value;
let message=document.getElementById("message").value;

let text =
`📅 *New Appointment Request*

👤 Name: ${name}

📞 Mobile: ${phone}

📧 Email: ${email}

📅 Date: ${date}

⏰ Time: ${time}

💼 Service: ${service}

📝 Message: ${message}`;

window.open(
`https://wa.me/918511938888?text=${encodeURIComponent(text)}`,
"_blank"
);

function sendWhatsApp(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let email=document.getElementById("email").value;
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;
let service=document.getElementById("service").value;
let message=document.getElementById("message").value;

let text =
`📅 *New Appointment Request*

👤 Name: ${name}

📞 Mobile: ${phone}

📧 Email: ${email}

📅 Date: ${date}

⏰ Time: ${time}

💼 Service: ${service}

📝 Message: ${message}`;

window.open(
`https://wa.me/918511938888?text=${encodeURIComponent(text)}`,
"_blank"
);

