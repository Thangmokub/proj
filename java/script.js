const abt = document.querySelector("#abtme");
const hide = document.querySelector("#hide");
const hide1 = document.querySelector("#hide1");
const hide2 = document.querySelector("#hide2");
const unhide = document.querySelector("#unhide");
const unhide1 = document.querySelector("#unhide1");
const unhide2 = document.querySelector("#unhide2");
const unhide3 = document.querySelector("#unhide3");
const hide3 = document.querySelector("#hide3");

const achive = document.querySelector("#achme");
const contact = document.querySelector("#contactt");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");

console.log(abt);
const print = console.log;
console.log("ab")
abt.addEventListener("dblclick",()=> { 
    hide.classList.remove("hidden");
    console.log("dbclick");
})
unhide.addEventListener("click",()=> { 
    hide.classList.add("hidden");
    console.log("dbclick");
})
achive.addEventListener("dblclick",()=> { 
    hide1.classList.remove("hidden");
    console.log("dbclick");
})
unhide1.addEventListener("click",()=> { 
    hide1.classList.add("hidden");
    console.log("dbclick");
})
contact.addEventListener("dblclick",()=> { 
    window.location.href = "https://www.instagram.com/___bbestt/";
})
phone.addEventListener("dblclick",()=> { 
    hide2.classList.remove("hidden");
    console.log("dbclick");
})
unhide2.addEventListener("click",()=> { 
    hide2.classList.add("hidden");
    console.log("dbclick");
})
email.addEventListener("dblclick",()=> { 
    hide3.classList.remove("hidden");
    console.log("dbclick");
})
unhide3.addEventListener("click",()=> { 
    hide3.classList.add("hidden");
    console.log("dbclick");
})