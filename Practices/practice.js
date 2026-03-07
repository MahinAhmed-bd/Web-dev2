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

//          Learn Objects--
let obj={
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
let {dept1,dept2}=obj.Dept;
let{tec1}=obj.study
console.log(dept1,dept2,tec1);

// Destructuring objects.
let obj3={
    name :"Meherab ahmed",
    age : `9 years old`,
    email : `meherab***36@email.com`,
}
for ( let key in obj3){
    console.log(key,`:` +obj3[key]);
}

// Deep copy---->
let objs={
    name :"Meherab ahmed",
    age : `9 years old`,
    email : `meherab***36@email.com`,
    address:{
        district : "Rajshahi",
    },
};

let obj4=JSON.parse(JSON.stringify(objs));


obj4.address.district="Rangpur";
console.log(obj4);
console.log(objs);