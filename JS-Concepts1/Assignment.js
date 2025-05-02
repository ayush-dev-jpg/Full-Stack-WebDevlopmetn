//Q-1
const value=10;
if(value%10==0){
    console.log("Good");
}
else{
    console.log("Bad");
}
//Q-2
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
console.log(`The user name is ${name}`);
console.log(`The age of the user is ${age} years old.`);
//Q-3
let Quarter=1;
switch (Quarter) {
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        break;
}
//Q-3
let str="RadhaVallabh Shri Harivansh";
if((str[0]=="R"||str[0]=="r")&& (str.length>5)){
    console.log("Golden String");
}
else{
    console.log("Not a golden string");
}
//Q-4
let a=5;
let b=10;
let c=15;
if(a>b){
    if(a>c){
        console.log("a is the largest");
    }
    else {
        console.log("c is largest");
    }

}
else{
    if(b>c){
        console.log("b is largest");
    }
    else{
        console.log("c is largest");
    }
}
