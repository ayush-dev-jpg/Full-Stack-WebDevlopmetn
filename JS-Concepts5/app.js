function hello(){
    console.log("Hello")
}
hello();

function ShriHarivansh(){
    console.log("Radhavallabh Shri Harivansh");
}
ShriHarivansh();

function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5();

function isAdult(){
    let age =18;
    if(age>=18){
        console.log("Adult");
    }
    else{
        console.log("Not Adult");
    }
}
isAdult();

//Create a function that prints a poem
function LaadliLaal(){
const poem=`In the Whisper of Vrindavan 

In Vrindavan’s breeze, so soft and kind,
Echoes a love that’s beyond the mind.
Where Radha walks with grace divine,
And Krishna plays his flute so fine.

Beneath the trees, in Yamuna’s shade,
Their leelas bloom, will never fade.
Not bound by time, nor caught in fate,
Their souls align — a perfect state.

Radha, with eyes like monsoon rain,
Feels every note, every joy and pain.
And Krishna, mischief in his smile,
Hides his tears behind his style.

No promises made, no vows to bind,
Yet love like theirs is rare to find.
Not a tale of gain or loss,
But purest form of Prem and Bhakti-Ras.

She seeks no throne, no crown above,
Her kingdom lies in Krishna’s love.
He, the Lord of all the skies,
Finds his world in Radha’s eyes.

So when you hear a flute at night,
Or moonlight seems a little bright —
Know their story lives in air,
In silent prayers and whispered care.`
console.log(poem);
}
LaadliLaal();

//Creat a function to roll a dice and always display the value of the dice(1to6)
function diceRoll(){
    num=Math.floor(Math.random()*6)+1;
    console.log(num);
}
diceRoll();
diceRoll();
diceRoll();

//Functions with arguments(Values we Pass to function)
/*function funcName(arg1,arg2..){
 do something
}*/
function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Ayush",20);
printInfo("Karan")
//These values get saved in the arguments.Values gets stored in orderwise Pattern

function sum(a,b){
    console.log(a+b);
}
sum(1,2);
sum(4,5);
sum(6,8);

//Create a Function that gives us the average of 3 numbers.
function calcAvg(a,b,c){
    let avg= (a+b+c)/3;
    console.log(avg);
}
calcAvg(5,6,8);

//Creat a Function that prints the multiplication table of a numebr.
function table(n){
    for(let i=1; i<=10; i++){
        console.log(` ${n} * ${i} is: ${n*i}`);
    }
}
table(5);

//Return-Return keyword returns the value of function
function sum1(a,b){
    return a+b;
}
sum1(5,6);//You’re calling the function, it does return 11, but you didn’t print it or store it.


s = sum1(4,3);
console.log(s);
console.log(sum1(4,5))
console.log(sum1(sum1(1,2),3));

function isAdult2(age){
    if(age>=18){
        return "Adult";
    }
    else{
        return "not adult";
    }
}
isAdult(23);

//Create a function that returns the sum of numbers from 1 to n
function sumOf(n){
    let sum=0;
    for(i=1;i<=n;i++){
        sum = sum+i;
    }
    return sum;
}
console.log(sumOf(2));

//Create a Function  that returns the concatenation of all strings in an array
let str = ["hi", "hello", "bye", "!"];

function concat(str){
    let result=0;
    for(let i=0; i<=str.length; i++){
        result += str[i];
    }
    return result;
}
console.log(concat(str));

//Global Scope and Function scope
let sum5 =54; //Global scope

function calSum3(a,b) {
    let sum4 = a+b; //Function scope
    console.log(sum4)
}
calSum3(1,2);
console.log(sum5);

//Lexical Scope
function outerFunc(){
    let x =5;
    let y=6;
    function innerFunc(){//function scope
        console.log(x);
        console.log(y);
    }
    innerFunc();
}
outerFunc();

//Practice Q-7
let greet = "hello";//Global Scope
function changeGreet(){
    let greet = "namaste";//Function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);//Lexical Scope
    }

    innerGreet();
}
console.log(greet);
changeGreet();

//Funtion Expressions (We do not define the funtion we put it inside a variable and then we use that variable as a function)
let newSum = function(a,b){
    return a+b;
}
console.log(newSum(9,9));

/*A function that does one or both:
->takes one or multiple functi[ons as arguments
->returns a function */
function multipleGreet(func,count){//Higher order function
    for(let i=1; i<=count; i++){
        func();
    }
}
    let greet1 = function(){
        console.log("Hello");
    }
    multipleGreet(greet1,2);

//Higher Order Function returns
let odd = function(n){
    console.log(!(n%2==0));
}

let even = function(n){
    console.log((n%2==0));
}

function oddOrEvenFactory(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request == "even"){
        return function(n){
            console.log((n%2==0));
        }
        return even;
    }else{
        console.log("")
    }
}
let request = "odd";
func(3);

//Methods
