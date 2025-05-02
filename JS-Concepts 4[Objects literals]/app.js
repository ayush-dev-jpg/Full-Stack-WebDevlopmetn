const student = {
    name:"Ayush",
    age:23,
    marks:94.4,
    city:"Delhi"
};


let student2 = ["Ayush", 20, 93.4]

let delhi = {
latitude: "28.7041° N",
longitude:"77.1025° E"
};

const item = {
    price: 100.90,
    discount: 50,
    colors: ["red","pink"]
};
//Its better to store it in object since it gives more clarity wheras in arrays we are simply storing the values.

//Twitter Post
const post = {
    username: "@AyushSrivastava",
    content: "This is my firstPost",
    likes: 150,
    repost: 5,
    comments: 8
};
//TO access key value pair we have two syntax:
// 1st Method(using dot): post.content or post.like or post.comments will fetch us the result
//2nd Method(using [" "]): post["content"] or post[" "].like or post["comments"] will fetch us the result
//To update the existing value -> acess the value by any of the metioned method eg: post.comment = 14 (so the value of the existing key will updated)
//To add new key same method eg post.quality = "good";
//To delete value : delete obj.keyname eg: (delete  post.likes ) likes will be deleted
 const obj= {
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
 };

 //Object of Objects(Storinf information of multiple students)
 const classInfo = {
    aman: {
        grade:"A+",
        city:"Delhi"
    },
    shraddha:{
        grad:"A",
        city:"Pune"
    },
    karan:{
        grade:"O",
        city:"Mumbai"
    }

 };

 //Array of Objects
 const classInfo2 = [
    {
        name:"aman",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"Shraddha",
        grade:"A+",
        city:"Pune"
    },
    {
        name:"Karan",
        grade:"O",
        city:"Mumbai"
    }
 ];

 a =Math.abs(-12);
 console.log(a);

 b=Math.pow(2,4);
 console.log(b);

 c=Math.floor(5.999)//Round of it will equal to that value or less than that value if we write 5.99999 it will give 5 for -5.5 it will give -6 (Rounds off to nearest smallest integer value)
 console.log(c);

 d=Math.ceil(5.5)//Rounds off to nearest largest integer value
 console.log(d);

 e=Math.random()//Genrates a random value between 0 and 1
 console.log(e)


//Random Integers from 1 to 10
let num = Math.floor(Math.random()*10)+1;
console.log(num);

//Random number between 1 and 100
let num2 = Math.floor(Math.random()*100)+1;
console.log(num2);

//Random number between 1 and 5
let num3 = Math.floor(Math.random()*5)+1;
console.log(num3);

//Rando number between 21 and 25
let num4 = Math.floor(Math.random()*5)+21
console.log(num4);