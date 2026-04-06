
// function addNumber(a,b){
//     let sum=a+b;
//     return sum;
// }
// const result=addNumber(3,4);
// console.log(result);


// const addNumber=(a,b)=>{
//     let sum=a+b;
//     return sum;
// }
// const result=addNumber(5,10);
// console.log(result);
// const button = document.querySelector("#red");


// function changeBG(){
//     document.body.style.backgroundColor=color;
// }
// button.addEventListener("click", changeBG);
// button.addEventListener("click", changeBg2);
// button.addEventListener("click", changeBG3);


// let sum = 0;
// let i;
// let n = Number(prompt("Enter the value of n :"));
// for (i=0 ; i<=n ; i++){
//     sum+=i;
//     console.log((n),"+");
// }
// console.log(sum);

// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 6);






// let p=document.createElement("p");
// p.textContent="Here it's a paragraph"
// document.body.append(p);

// let h1=document.createElement("h1");
// h1.textContent="Iam from js";
// document.querySelector("div").prepend(h1);

// let image=document.querySelector("img");
// image.alt="https://newindianmodels.com/wp-content/uploads/2020/09/Lean-your-shoulder-best-poses-for-female-model.jpg";

// let evnt=document.querySelector("h1");
// evnt.addEventListener("click",function(){
//         evnt.style.color="red";
// })
// let evnt2=document.querySelector("img");
// evnt2.addEventListener("click", () =>{
        
//         evnt2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpGbs4Rs5sBt6niREaZuivtjTczY8eVuqew&s";
// });
// evnt2.addEventListener("dblclick", () =>{
        
//         evnt2.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX50KUO0Pu0_ViB3TerHiUMlxufrPB4lz0Dw&s";
// });

// let inp=document.querySelector("input").addEventListener("input", (val) => {
//         if(val.data !==null){
//                 console.log(val.data);
//         }
// });
// let slct=document.querySelector("select").addEventListener("change",(details) =>{
//         evnt.textContent=`${details.target.value} is selected`;
//         console.log(details.target.value);
//         evnt.style.color="blue";
// })
// let a=document.querySelector("h1");
// window.addEventListener("keydown", (faah) =>{
//         if(faah.key === " "){
//                 a.textContent="Space";
//         }
//         else{
//                 a.textContent=faah.key;
//         }
// });

// let btn=document.querySelector("#btn");
// let inp=document.querySelector("#input");
// btn.addEventListener("click", () =>{
//         inp.click();
// });
// inp.addEventListener("change", (detls) =>{
//         const file=detls.target.files[0];
//         if(file){
//                 btn.textContent=file.name;
//         }
//         else{
//                 btn.textContent="select first";
//         }
// });

// let form=document.querySelector("form");
// let input=document.querySelectorAll("input");
// let main=document.querySelector("#main");
// form.addEventListener("submit", (dtl) =>{
//     dtl.preventDefault();

//     let card=document.createElement("div");
//     card.classList.add("card");

//     let profile=document.createElement("div");
//     profile.classList.add("profile");

//     let images=document.createElement("img");
//     images.setAttribute("src" ,input[0].value);

//     let h3=document.createElement("h3")
//     h3.textContent=input[1].value;
//     let h5=document.createElement("h5")
//     h5.textContent=input[2].value;
//     let p=document.createElement("p")
//     p.textContent=input[3].value;

    
//     profile.appendChild(images);
//     card.appendChild(profile);
//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);
//     main.appendChild(card);

//     input.forEach((vals)=>{
//         if(vals.type!=="submit"){

//             vals.value="";
//         }
//     });
// });


// const inp = document.querySelector("input");
// inp.addEventListener("input", (dets) =>{
//     if (dets.data !== null){
        
//         console.log(dets.data);
//     }
    
// });
let h1= document.querySelector("h1");
let sel = document.querySelector("select");
sel.addEventListener("change" , (dets) =>{
    h1.textContent=( `${dets.target.value} is Seleted`);
});












