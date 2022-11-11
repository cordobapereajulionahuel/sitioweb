let a=document.querySelector(".a");
a.addEventListener("click",rojo);
 function rojo(){
    let p=document.querySelector(".p");
   p.style.color="red";
}
let b=document.querySelector(".b");
b.addEventListener("click", verde);
function verde(){
    let p=document.querySelector(".p");
   p.style.color="rgb(113, 224, 113)";
}
let c=document.querySelector(".c");
c.addEventListener("click", black);
function black(){
    let p=document.querySelector(".p");
   p.style.color="black";
}