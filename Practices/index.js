
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

// Q10 : Stop at First multiple of 7
// Write a loop from each number
// Stops completely when it finds the first number divisible by 7

for (i=1; i<=50; i++){
    console.log(i);
    if (i%7===0){
        break;
    }
}

//  Q11: skip Multiple of 3
//  Write a loop from 1 to 20 that :
// . Skips numbers divisible by 3
// . Prints all others
//  📌Use continue

// Expected outputs :
// 1 2 4 5 7 8 10 11 ... (no 3,6,9,etc.)

for (let i=1; i<=100; i++){
    if(i%2!==0){
        console.log(i);
    }
    else if(i===10){
      break;  
    } 
}


