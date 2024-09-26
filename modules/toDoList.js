export class todoList {
  constructor(listElement) {
    this.todoList = listElement;
    this.todos = [];
  }

  addtoList(text) {
    // Creating the li for storing the list item
    var li = document.createElement("li");
    li.textContent = text;
    
    // Creating the deleteButton that will be used
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute('id','deleteButton');
    deleteButton.textContent = "Delete Task";
    deleteButton.addEventListener("click", () => {
      this.removeTodo(text, li)
    })

    // Creating the finishTaskButton that will be used
    var finishTask = document.createElement("button");
    finishTask.setAttribute('id', 'finishTask');
    finishTask.textContent = "Finish Task";
    finishTask.addEventListener("click", () => {
      li.style.background = "linear-gradient(to right, rgba(63, 195, 128, 0.5), rgba(63, 195, 128, 0) 70%)";
      finishTask.remove()
    })

    this.todoList.appendChild(li);
    this.todoList.appendChild(deleteButton);
    this.todoList.appendChild(finishTask);
    return li;
  }

  removeFromList(text) {
    let childs = Array.from(this.todoList.childNodes);
    let item = childs.find(i => i.innerText === text);
    if (item) {
      this.todoList.removeChild(item);
      this.todoList.removeChild(deleteButton);
      this.todoList.removeChild(finishTask);
    }
  }

  addTodo(text) {
    this.todos.push(text);
    this.addtoList(text);
  }
  
  removeTodo(text) {
    this.todos = this.todos.filter(i => i !== text);
    this.removeFromList(text);
  }
}


