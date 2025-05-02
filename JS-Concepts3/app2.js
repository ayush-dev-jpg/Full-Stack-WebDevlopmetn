// let n=prompt("Enter the number whose table you want to print:");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

//Favourite Movie game
const favMovie = "Little Krishna";
let guess = prompt("Enter Your Favourite Movie:");
while((guess != favMovie ) && (guess != "quit")){
    console.log("Wrong!");
    guess=prompt("Nice Try! Guess again please:");
}
if(guess == favMovie){
    console.log("Right Guess");
}else{
    console.log("You quit.")
}
