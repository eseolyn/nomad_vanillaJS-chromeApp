const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const clearBtn = document.querySelector("#list-btn");

const TODOS_KEY = "todos";
let todos = [];
let isChecked = false;

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function checkedBox(event) {
  const box = event.composedPath()[1].children[2];
  const checkedLabel = event.composedPath()[1].children[0];
  if (this.isChecked) {
    this.isChecked = false;
    box.classList.remove("checked");
    checkedLabel.classList.remove("checking");
  } else {
    this.isChecked = true;
    box.classList.add("checked");
    checkedLabel.classList.add("checking");
  }
}

function deleteTodo(event) {
  let li = "";
  if (event.target.tagName == "I") {
    li = event.composedPath()[2];
  } else {
    li = event.composedPath()[1];
  }
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const button = document.createElement("button");
  label.setAttribute("for", li.id.slice(8, 13));
  input.type = "checkbox";
  input.id = li.id.slice(8, 13);
  input.addEventListener("click", checkedBox);
  button.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
  button.classList.add("btn");
  button.addEventListener("click", deleteTodo);
  li.appendChild(label);
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}
todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

function clearListBtn() {
  todoList.innerHTML = "";
  todos = [];
  saveTodos();
}
clearBtn.addEventListener("click", clearListBtn);
