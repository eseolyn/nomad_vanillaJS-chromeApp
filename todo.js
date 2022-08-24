const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const clearBtn = document.querySelector("#list-btn");

const TODOS_KEY = "todos";
let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.composedPath()[2];
  const i = event.target.parentElement;
  li.remove();
  i.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id, 10));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const button = document.createElement("button");
  label.setAttribute("for", "checkbox");
  input.type = "checkbox";
  input.classList = "checkbox";
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

function clearListBtn(event) {
  todoList.innerHTML = "";
  localStorage.clear();
}
clearBtn.addEventListener("click", clearListBtn);
