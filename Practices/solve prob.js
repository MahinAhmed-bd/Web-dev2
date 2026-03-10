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

// let i=1;
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

// let sum=0;
for (i=1; i<=100; i++){
    sum +=i;
}
console.log(sum);

// Number Two--
// let i=1;
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

       // Solving Arrays Question---

 let arr=[2,4,6,10,15];
 console.log(arr[0]);

// forEach Array
arr.forEach(function(val){
    console.log(val);
});

// map method in array.
let array=arr.map(function(val){
    return 121;
});
console.log(array);

// using reduce method in array
let value=arr.reduce((acc,val)=>{
    return acc+val;
},0)
console.log(value);

// using filter method in arrays.
let a=arr.filter(function(val){
    if(val>5){
        return true;
    };
});
console.log(a);

// using find method in arrays.
let arry=[2,4,6,10,15];
let b=arry.find(function(val){
    if(val===11){
        return val;
    };
});
console.log(b); //Undefined 


// some and every method in arrays.
let arrays=[2,4,5,6,10,15];

let c=arrays.some((val)=>{
    if(val<=5){
        return val;
    };
});
console.log(c);

// every method
let d=arrays.every((val)=>{
    if(val>5){
        return val;
    };
});
console.log(d);

//      Operation of objects--->

let obj={
    name : "Mahin Ahmed",
    session: 23_24,
    Roll: 2385_342,
    Dept: "CST",
};
console.log(obj.name);

// Nested Destructuring objects
let obj2={
    name : "Mahin Ahmed",
    session: 23_24,
    Roll: 2385_342,
    Dept: {
    dept1:"CST",
    dept2:"CT",
    },
    study:{
        tec1: "Diploma",
        tec3: "HSC",
    },

};
let {dept1,dept2}=obj2.Dept;
let{tec1}=obj2.study
console.log(dept1,dept2,tec1);

// solving question in use of for in loop at Objects---
let objs={
    name :"mahin ahmed",
    age : `19 years old`,
    email : `mahinahmed.tech@gmail.com`,
}
for ( let key in objs){
    console.log(key,`:` +objs[key]);
}

// Deep cloning objects
let obj3={
    name :"Meherab ahmed",
    age : `9 years old`,
    class : 4,
    address:{
        district : "Rajshahi",
    },
};

let obj4=JSON.parse(JSON.stringify(obj3));

obj4.address.district="Rangpur";
console.log(obj4);
console.log(obj3);

