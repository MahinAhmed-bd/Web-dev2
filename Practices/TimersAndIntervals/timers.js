let count=0;
let progress=document.querySelector(".dw_load");
let small =document.querySelector("small");
let head=document.querySelector("h1");
let sec=10;
setInterval(function (){
    if(count <=99){
        count++;
        progress.style.width=`${count}%`;
        small.textContent=`${count}%`;
    }
    else{
        head.textContent=`Downloaded.`;
    };
}, (sec * 1000)/100);