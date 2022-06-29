let id=0;


function addTodo(){
 let todoName = document.getElementById('todoName').value;
 if(todoName===""){ 
    alert('add a list of todos');
}else{
displayTodo(todoName);
document.getElementById('todoName').value="";
} 


}
function deleteItem(id){
    document.getElementById(id).remove();

}
function displayTodo(todo){
    id++;
document.getElementById('todo-list').innerHTML+= `
<li id="${id}">
<div><i class="fa-solid fa-bars"></i> ${todo} </div>
<button onclick="deleteTodo(${id})"><i class="fa-solid fa-trash-can"></li></button></li>`;

}
