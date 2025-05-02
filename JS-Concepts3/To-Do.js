let toDo = [];
let req=prompt("Enter your request here.");

while(true){
    if(req=="quit"){
        console.log("quitting the app!");
        break;
    }
    else if(req=="list"){
        console.log="----------";
        for(let task of toDo){
            console.log(task);

        }
    }
    else if(req=="add"){
        let task = prompt("Enter the task");
        toDo.push(task);
        console.log("Task added");
    }
}
console.log("hello");