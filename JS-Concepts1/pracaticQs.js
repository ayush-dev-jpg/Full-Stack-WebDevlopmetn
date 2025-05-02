let Color='red';
//traffic light System
if(Color=='red'){
    console.log("Stop")
}else if(Color=='yellow'){
    console.log("Slow Down")
}else  if(Color=='green'){
    console.log("Go")
}
//Grading System
let marks=75;
if(marks>+80){
    console.log("A+")
}else if(marks >=60){
    console.log("A")
}else if(marks >=33){
    console.log("B")
}else if(marks<33){
    console.log("F")
}
//Popcorn
let size="XL";
if(size==="XL"){
    console.log("The price of the popcorn is: Rs.250");
}else if(size=="L"){
    console.log("The price of the popcorn is: Rs.200");
}else if(size==="M"){
    console.log("The price of the popcorn is: Rs.100");
}else if(size==="S"){
    console.log("The Price of the popcorn is: RS.50");
}else{
    console.log("Size invlaid");
}
//To Checek if the given string is a good string.
let string="a";
if(string[0]=="a" && string.length>3){
    console.log("Good String");
}else{
    console.log("It is not a good string");
}
//Switch statement to print the day of the week.
let Day = 3;
switch (Day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("HuLuLaLa")
        break;
}