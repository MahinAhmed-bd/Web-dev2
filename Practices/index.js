
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


        // Arrays---

 let arr=[2,4,5,6,10,15];
//  console.log(arr[0]);

// // forEach Array
// arr.forEach(function(val){
//     console.log(val);
// });

// // map method in arrays.
// let array=arr.map(function(val){
//     return 121;
// });
// console.log(array);

// using reduce method in arrays.
// let value=arr.reduce((acc,val)=>{
//     return acc+val;
// },0)
// console.log(value);

// using filter method in arrays.
// let a=arr.filter(function(val){
//     if(val>5){
//         return true;
//     };
// });
// console.log(a);

// filter method.
// let b=arr.find(function(val){
//     if(val===11){
//         return val;
//     };
// });
// console.log(b);

// let array=[2,4,5,6,10,15];

// let c=array.some((val)=>{
//     if(val<=5){
//         return val;
//     };
// });
// console.log(c);
// let d=array.every((val)=>{
//     if(val>5){
//         return val;
//     };
// });
// console.log(d);


// let obj={
//     name : "Mahin Ahmed",
//     session: 23_24,
//     Roll: 2385_342,
//     Dept: {
//     dept1:"CST",
//     dept2:"CT",
//     },
//     study:{
//         tec1: "Diploma",
//         tec3: "HSC",
//     },

// };
// let {dept1,dept2}=obj.Dept;
// let{tec1}=obj.study
// console.log(dept1,dept2,tec1);

// Destructuring objects.
// let obj3={
//     name :"Meherab ahmed",
//     age : `9 years old`,
//     email : `meherab***36@email.com`,
// }
// for ( let key in obj3){
//     console.log(key,`:` +obj3[key]);
// }

// Deep copy---->
// let obj3={
//     name :"Meherab ahmed",
//     age : `9 years old`,
//     email : `meherab***36@email.com`,
//     address:{
//         district : "Rajshahi",
//     },
// };

// let obj4=JSON.parse(JSON.stringify(obj3));


// obj4.address.district="Rangpur";
// console.log(obj4);
// console.log(obj3);

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




















