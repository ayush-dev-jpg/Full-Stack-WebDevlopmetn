//Loops
// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// for(let i=5;i>=1;i--){
//     console.log(i);
// }
//Print odd number from 1 to 15
// for(let i=1;i<=15;i=i+2){
//     console.log(i);
// }
// console.log("Backwards");
// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }
// //Print even numbers
// console.log("even numbers");
// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }
// //Multiplication table for 5
// console.log("Multiplication table for 5");
// for(let i=5; i<=50; i=i+5){
//     console.log(i);
// }
// //Nested Loops
// for(i=1;i<=3;i++){
//     console.log(`outer loop ${i}`);
//     for(j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// //While Loop
// console.log("WhileLoop");5
// let k = 1;
// while(k<=5){
//     console.log(k);
//     k++;
// }
// //Break --> It is genrally used with while loop
// let l=1;
// while(l<=5){
//     console.log(l);
//     if(l==2){
//         break;
//     }
//     l++;
// }

//Loops with Arrays

// let fruits = ["Mango","Orange","pineapple","Guava","Coconut"];
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// };

//Reverse
// let fruits = ["Mango","Orange","pineapple","Guava","Coconut"];
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }

//Nested Loop Arrays
let Heroes = [["Ironman","Spiderman","thor"],["Superman","Batman","Wonder Woman"]];
for(let i=0;i<Heroes.length;i++){
    console.log(`list ${i}`);
    for(let j=0;j<Heroes[i].length;j++){
        console.log(Heroes[i][j]);
    }
}

let student = [["Aman",95],["Shraddha",94.4],["Karan",98]]
for(let i=0;i<student.length;i++){
    console.log(`i=${i}`);
    for(j=0;j<=student[i].length;j++){
        console.log(student[i][j]);
    }
}