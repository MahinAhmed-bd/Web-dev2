 // Question number 1--
// Print numbers from 1 to 10 using a for loop

for (i=1; i<11;i++){
    console.log(i)
}

// Question number 2--
// Print number from 10 to 1 using a while loop

let i=10;
while(i>=1){
    console.log(i);
    i--;
}

// Question number 3--
// Print even numbers from 1 to 20 using a for loop

for(i=1; i<=20; i++ ){
    if(i%2==0){
        console.log(i)
    }
    
}

// Question number 4--
// Print odd numbers from  1 to 20 using a while loop

let i=1;
while(i<=15){
    if(i%2!==0){
    console.log("Odd numbers are:"+i);
    }
    i++;
}

// Question number 5--
// Print the multiplication table of 5 (i.e., 5 * 1 = 5 ... 5 * 10 = 50) 

for (i=1; i<=10; i++){
    console.log(`5 * ${i}= ` +5*i);
}

// Question number 6--
//  Find the sum of numbers from 1 to 100 using two loops
// Number One--

let sum=0;
for (i=1; i<=100; i++){
    sum +=i;
}
console.log(sum);

// Number Two--
let i=1;
let sum = 0;
while(i<=100){
    sum+=i;
    i++;
}
console.log(sum);

// Question number 7
// Print all numbers between 1 to 50 that are divisible by 3. 

for(let i=1; i<=50; i++){
    if (i%3===0){
        console.log(i)
    }
}

// Question number 8
// Ask the user for a number and print whether each number and 
// print whether each number from 1 to that number is even or odd.   

const prompt=require("prompt-sync")();
let n= Number(prompt(`Enter the value of n :`));
for(i=1; i<=n; i++){
    if (i%2===0){
        console.log(i+ `is even number`);
    }
    else{
        console.log(i+ `is odd number`);
    }
}

// Question number 9
// Count how many numbers between 1 to 100 are divisible by booth 3 and 5.

for (i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log(i);
    }
}


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


// Practice Zone

console.log(null + 1);
console.log("5" + 3);
console.log("5" - 3);
console.log(true + false);


// First class function
function abcd(val){
    val();
}
abcd(function(){
    console.log("Hey iam cooked!! or burned.")
})

// Closure Function  

function outer(){
    let count=0;
    return function(){
        count ++;
        console.log(count);
    }
}
const abcd = outer();
abcd();
abcd();

// IIFE 
(function init(){
    for(let i=1; i<=50; i++){
        console.log(i);
    }
})();

// Write a BMI Calculator
function BMI(weight,height){
    return weight/(height**2)
}
console.log(BMI(54,1.7).toFixed(2));

// Discount Calculator 
function discountCalculator(discount){
    return function(price){
        return price-price*(discount/100);
    };
}
let tenp=discountCalculator(10);
let twnp=discountCalculator(20);
console.log(twnp(200));