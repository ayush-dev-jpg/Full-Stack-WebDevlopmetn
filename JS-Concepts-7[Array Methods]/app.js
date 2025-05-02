//RadhaVallabh Shri Harivansh
//1.ForEach
let arr = [1,2,3,4,5];

arr.forEach((el)=>{
    console.log(el);
});
// arr.forEach(function(el){
//     console.log(el);
// });

// let print = function(el){
//     console.log(el)
// }
// arr.forEach(print);

let students=[{
    name:"Ayush",
    marks:95
},
{
    name:"Shraddha",
    marks:95.4
},
{
    name:"Rajat",
    marks:99
}];
students.forEach((student)=>
console.log(student.marks));

let gpa = students.map((el)=>{
    return el.marks/10;
});
console.log(gpa);

//2.Map(when you want to transform an array)
let num = [1,2,3,4];

let double = num.map((el)=>{
    return el*2;
})
console.log(double);

//3.Filter(If the callback gives true output we add the new elemetn in the new array but if the callback gives false we dont add it)
let nums = [2,4,1,5,6,2,7,8,9];

let even = nums.filter((el)=>{
    return (el%2==0);
})

//4.Every(Returns true if every element of array gives true for some function if any one of the value is false it wont return)
const result = [1,2,3,4].every((el)=>{
    return (el%2===0);

})
console.log(result);

//Some returns true of false it works like logical OR function
const result1 = [1,2,3,4].some((el)=>{
    return (el%2===0);

})
console.log(result1);

//Reduce Fuction(Reduces the array to a single value)
 let nums1 = [1,2,3,4];
 let finalVal = nums1.reduce((res,el)=>res+el);
 console.log(finalVal);

 //Question-Finding Maximum in an array using reduce function.
 //Using for loop
 let arr2 = [1,4,2,5,6,7,2,9,2];

//  let max = -1;

//  for(let i=0; i<arr2.length; i++){
//     if(max < arr2[i]){
//         max = arr2[i];
//     }
//  }
//  console.log(max);

//Using reduce function

let max = arr2.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
})
console.log(max);

//Check if all numbers in our array are multiples of 10 or not
let numsz =[10,20,30,40];

let ans = numsz.every((el) => el%10==0);
console.log(ans);

//Creat a function to find the min number in an array
function getMin(numss){
    let min = numss.reduce((min,el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }
    });
    return min;
}
let numss = [10,20,30,40,5];
getMin([1,2,3,4]);

//Default parameters
function sum(a,b=2){
    return a+b;
}
console.log(sum(1));

//Spread(Expands an iterable into multiple values)
console.log(..."apna college");
let newArr = [1,2,3,4,5,6,7,8,9,0];
console.log(Math.min(...newArr));

let arr5 = [...newArr];//Spread function helps to make copy of an array
console.log(arr5);

let odd =[1,3,5,7,9];
let even1 =[2,4,6,8,10];
let newNum =[...odd,...even1]
console.log(newNum);

let data = {
    email:"ironman@gmail.com",
    password:"abcdef",
};
let dataCopy = {...data,id:123};
console.log(dataCopy);

//REST(Allows a fuctiont to take an indefinet number of arguments and bundle them in an array)
 function sum(...args){//arguments(using rest you can convert argument into arrays and can apply array methods.Arguments are like array but not array)
    for(let i=0; i<args.length;i++){
        console.log("you gave us",args[i]);
    }
    return args.reduce((res,el)=> res+el);
 }
console.log(sum(1,2));

function min(...args){
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    })
}
console.log(min(1,2,3,4,5))

//Destructuring(Storing values of array or obejects into multiple variables)
let names = ["tony","bruce","steve","peter"];
let [winner,runnerup,...others]= names;
console.log(winner,runnerup,others);

//Destructuring (Objects)
const student = {
    name:"karan",
    age:14,
    class:9,
    subjects:["hindi","english","maths","science"],
    username:"karan@123",
    password:"abcd"
};
let {username:user,password,city:place="Mumbai"}=student;
console.log(place);