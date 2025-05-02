// let students = ["Ayush","Rohit","Shraddha"];
// students.length();

//Array-Methods 
//Push: add to end 
// Unshift: add to start 
// Pop: delete from end & returns it 
// Shift: delete from start & returns it
//Q-1
let months = ["Janauary","July","March","August"];
let months2 = months.shift();
let months3 = months.shift();
months.unshift("June");
months.unshift(months3);
console.log(months);

//indexof: Returns index of something -->found:index -->not found:-1
//includes: search for a value
let primary = ["red","yellow","blue"];
console.log(primary.indexOf("red"));
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("purple"));
console.log(primary);
console.log(primary.includes("red"));
console.log(primary.includes("green"));

//concat : merge 2 arrays
//reverse : reverse an array
let secondary = ["purple","white","orange"];
console.log(primary.concat(secondary));
console.log(secondary.reverse());   

//Slice in arrays
//Slice(start,end) start is inclusive and end is exclusive
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log("slice from 2",colors.slice(2));
console.log("slice from 2 to 3 and since 3 is exclusive it will not be included",colors.slice(2,3));
console.log("slice from 2 to 4 and since 4 is exclusive it will not be included",colors.slice(2,4));
console.log("To get elements from end we use slice from '-' ",colors.slice(-2));
console.log("To get elements from end we use slice from '-' slice from -1",colors.slice(-1));

//splice: removes / replaces / add elements in place 
//array.splice(start, deleteCount, item1, item2, ...)
/*	•	start: The index where to start
	•	deleteCount: How many elements to remove
	•	item1, item2, ...: Elements to add */
//It does changes in orginal array
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0,1,"blue","gray"));
console.log(colors);
//sort()
let chars= ["b","e","k","o","a","r"];
console.log(chars.sort());

let monthss = ["Janauary","July","March","August"];
console.log(monthss.splice(0,2,"july","june"));//It means that elements from index 0 and 1 are deleted since 2nd index is exclusiive and the deletd elements are replaced by "july" and "june".
console.log(monthss);

let lang = ['c','c++','html','javascript','python','java','c#'];
lang.push('sql');
console.log(lang);
console.log(lang.reverse().indexOf('javascript'));

//const array
//by making the array constant the address of the array cannot be changed and the elements inside the array can be changed
const arr_1 = ['1','2','3','4'];

//Nested array
let nums = [[1,2],[3,4],[5,6]];
console.log(nums);
console.log(nums[0]);
console.log(nums[0][0]);
console.log(nums[1][0]);

//Practice Question: Writing the state of the tic-tac-toe game
let game =[['X','null','0'],['null','X','null'],['0','null','X']];
game[0][1] = '0';
console.log(game);