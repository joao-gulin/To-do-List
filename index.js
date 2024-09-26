import { todoList } from "./modules/toDoList.js";

const addTask = document.querySelector("#addTask");
const taskInput = document.querySelector("#taskInput");
const taskArea = document.querySelector("#taskArea");

const myTodo = new todoList(taskArea);

taskInput.addEventListener("click", function () {
  taskInput.value = '';
})

addTask.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText) {
    myTodo.addTodo(taskText);
  }
  taskInput.value = '';
})
