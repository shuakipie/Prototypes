// Create the Person prototype
let Person = {
    name: "",
    age: 0,
    sayHello: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  // Create a new object based on the Person prototype
  let john = Object.create(Person);
  john.name = "John";
  john.age = 30;
  john.sayHello(); // Outputs "Hello, my name is John"
  

  // more examples

  // Model
let Item = {
    name: "",
    id: 0
  };
  
  let items = [];
  
  // View
  let itemList = document.getElementById("item-list");
  
  function renderItems() {
    let itemsHTML = "";
    for (let i = 0; i < items.length; i++) {
      itemsHTML += "<li>" + items[i].name + "</li>";
    }
    itemList.innerHTML = itemsHTML;
  }
  
  // Controller
  function addItem() {
    let itemName = document.getElementById("item-name").value;
    let newItem = Object.create(Item);
    newItem.name = itemName;
    newItem.id = items.length + 1;
    items.push(newItem);
    renderItems();
  }
  
  let addButton = document.getElementById("add-button");
  addButton.addEventListener("click", addItem);
  

  // Model
let Todo = {
    task: "",
    isCompleted: false
  }
  
  let todoList = [];
  
  // View
  let todoContainer = document.getElementById("todo-container");
  
  function renderTodos() {
    let todoHTML = "";
    for (let i = 0; i < todoList.length; i++) {
      let todo = todoList[i];
      todoHTML += `<div class="todo ${todo.isCompleted ? 'completed' : ''}">
          <span>${todo.task}</span>
          <button class="complete-btn" data-index=${i}>Complete</button>
      </div>`;
    }
    todoContainer.innerHTML = todoHTML;
  }
  
  // Controller
  function addTodo() {
    let task = document.getElementById("todo-task").value;
    let newTodo = Object.create(Todo);
    newTodo.task = task;
    todoList.push(newTodo);
    renderTodos();
  }
  
  function completeTodo(index) {
    todoList[index].isCompleted = true;
    renderTodos();
  }
  
  let addBtn = document.getElementById("add-todo-btn");
  addBtn.addEventListener("click", addTodo);

  todoContainer.addEventListener("click", function(e) {
  if (e.target.classList.contains("complete-btn")) {
  let index = e.target.dataset.index;
  completeTodo(index);
  }
  });

  
  