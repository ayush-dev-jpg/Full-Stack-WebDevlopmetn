//'this' keyword in js 
const student = {
    name: "Ayush",
    age: 20,
    eng: 95,
    math: 93,
    phy:97,
    getAvg(){
        let avg = ((this.eng + this.math + this.phy)/3);
        console.log(avg);
        console.log(`${this.name} got an avg of ${avg}`)
    }
};
student.getAvg();

//Try and catch
/* The try statement allows you to define a block of code to be tested for errors while it is being executed.
The catch statement allows you to define a block of code to be executed, if an error occurs in the try block. */
try{
    console.log(a);
}catch{
    console.log("caught an error a is not defined.")
}

//Arrow Functions
const sum = (a,b) => {
    console.log(a+b);
}
sum(2,35);

const cube = (n) =>{
    console.log(n*n*n);
}
cube(3);

const hello = () =>{
    console.log("Hello world!")
}
hello();

//Set Timeout(1sec=1000ms)
console.log("Hi there!");
setTimeout(()=>{
    console.log("Apna college");
},4000);
console.log("Welcome to!")

//Set Interval
let id = setInterval(()=>{
    console.log("Apna college");
},2000);

console.log(id);

let id2 = setInterval(()=>{
    console.log("Hello Wordl");
},3000)

console.log(id2);
//To stop execution of a particular interval write clearInterval(id) it will stop the function
