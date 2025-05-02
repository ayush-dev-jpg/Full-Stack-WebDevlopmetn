let box = document.querySelector('.box');
box.addEventListener("mouseout",()=>{
    console.log("mouse moved out");
})

let input = document.querySelector('#keyPress');
input.addEventListener("keypress",function(event){
    console.log("Key is pressed.",event.key);
})

window.addEventListener("scroll", function() {
    console.log("Page is scrolling, current scroll position:", window.scrollY);
});

let btn = document.querySelector('#load');
btn.addEventListener('load',function(){
    console.log("The page has loaded.")
})

// let btn1 = document.querySelector('#green');
// btn1.addEventListener("click",function(){
//     btn1.style.backgroundColor = "green";
// })

document.addEventListener("DOMContentLoaded", function() {
    let btn1 = document.querySelector('#green');
    btn1.addEventListener("click", function(){
        btn1.style.backgroundColor = "green";
    });
  });