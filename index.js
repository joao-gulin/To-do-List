import { todoList } from "./modules/toDoList.js";

const addTask = document.querySelector("#addTask");
const taskInput = document.querySelector("#taskInput");
const taskArea = document.querySelector("#taskArea");

const myTodo = new todoList(taskArea);

document.addEventListener("DOMContentLoaded", () => {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
  savedTodos.forEach(task => myTodo.addToUI(task));
})


taskInput.addEventListener("click", function () {
  taskInput.value = '';
})

addTask.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText) {
    myTodo.addTodo(taskText);
    myTodo.saveTodos();
  }
  taskInput.value = ''; 
})
