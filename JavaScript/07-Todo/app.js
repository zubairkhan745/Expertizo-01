console.log("Todo App");

const input = document.querySelector("#add-task");
const ul = document.querySelector("ul");
const todo = [];


//render Todo
function rendertodo(){
    ul.innerHTML = '';
    for (let i = 0; i < todo.length; i++) {
        ul.innerHTML += `<li class="my-2">${todo[i]}  <button onclick="edittodo(${i})" class="btn btn-primary btn-sm mx-3">Edit</button><button onclick="deletetodo(${i})" class="btn btn-danger btn-sm">Delete</button> </li>`;        
    }
}

//add todo
function addtodo() {
    todo.push(input.value);
    input.value = '';
    rendertodo(); 
}

// Delete Todo
function deletetodo(index) {
    todo.splice(index , 1);
    input.value = '';
    rendertodo();
}

// Edit Todo
function edittodo(index) {
   const editedvalue = prompt("Update Your Task" , todo[index]);
   todo.splice(index,1,editedvalue);
   rendertodo();
}

//Delete All Function
function deleteall(){
    todo.length = 0;
    rendertodo(); 
}