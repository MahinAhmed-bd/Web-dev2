// Arrays---

 let arr=[2,4,5,6,10,15];
//  console.log(arr[0]);

// // forEach Array
arr.forEach(function(val){
    console.log(val);
});

// // map method in arrays.
let arrays=arr.map(function(val){
    return 121;
});
console.log(arrays);

// using reduce method in arrays.
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

// filter method.
let b=arr.find(function(val){
    if(val===11){
        return val;
    };
});
console.log(b);

// Arrays.every methods
let array=[2,4,5,6,10,15];

let c=array.some((val)=>{
    if(val<=5){
        return val;
    };
});
console.log(c);
let d=array.every((val)=>{
    if(val>5){
        return val;
    };
});
console.log(d);