const abt = document.querySelector("#abtme");
const hide = document.querySelector("#hide");
const hide1 = document.querySelector("#hide1");
const unhide = document.querySelector("#unhide");
const achive = document.querySelector("#achme");
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