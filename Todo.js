let req=prompt("Enter your Request:");
const todo=[];
while(true){
    if(req=="quit"){
        console.log("You are Quitted");
        break;
    }
    else if(req=="add"){
        let task=prompt("Enter your Task");
        todo.push(task);
        console.log("Task added Successfully");
    }
    else if(req=="list"){
        for(i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
    }
    else if(req=="delete"){
        idx=prompt("enter the index of Task you want to Delete");
        todo.splice(idx,1);
        console.log("Task deleted Successfully");
    }
    else{
        console.log("Wrong request! please Try again");
    }
    req=prompt("Enter your Request:");
}