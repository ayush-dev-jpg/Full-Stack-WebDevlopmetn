//str.trim()-->It removes white spaces from the string(It creates a new with the new changes the orignal string remains smae) e.g:
//String are immutable in javascript.

// let password = prompt("Enter Your password:");
// let newPass = password.trim();
// console.log(newPass);

let str1="Apna College";
let str2="RadhaVallabh Shri Hith Harivansh";
let LC = str1.toLowerCase();
let UC = str2.toUpperCase();
console.log(LC);
console.log(UC);

//Chainig method
let msg="    hello    ";
let newMsg=msg.trim().toUpperCase();
console.log(newMsg);

//Slice --> Returns the part of the string as an orignal string.
//str.slice(start,end);(end+1)--> to get back string from 1 to end 
//suppose you want string from 1 to 4 so write .slice(1,5)
//str.slice(-num) --> read docs or just watch a video.
let str = "I love Coding";
newStr = str.slice(2,6);
console.log(newStr);

//REPLACE METHOD
//Searches a value in the string & returns a new string with the value replaced. 
//let str = "lloveCoding";
//str.replace("love", "do") --> "IdoCoding" 
//str.replace("o", "x") --> "IlxveCoding"
let message = "Hello Ayush";
let newMessage = message.replace("Ayush","Rohit");
console.log(newMessage);

//REPEAT METHOD
//repeat Returns a string with the number of copies of a string 
//let str = "Mango"; 
//str.repeat(3);--> "MangoMangoMango"
let fruit = "mango ";
let newFru= fruit.repeat(5);
console.log(newFru);

let msgNew = "Radhe Shyam";
let lastFive = msgNew.slice(-5);
console.log(lastFive)

//String methods with aruguments
//To check the index(Returns the first index of occuring)
let newStrnew = "Humare maayi shyama ju ko raaj";
let check =  newStrnew.indexOf("shyama");
console.log(check)

//Practice Question
let name = "ApnaCollege";
let newName = name.slice(4,11).replace("l","t");
console.log(newName)