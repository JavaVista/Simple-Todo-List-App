// In most cases, it is not necessary to put the JavaScript script tag on the body tag.
//The defer and async attributes allow the browser to download and execute JavaScript
//scripts without blocking the rendering of the page, so you can put the script tag
//in the head tag or in an external file. However, if you need to access the DOM from
// the script, you will need to put the script tag in the body tag.

const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

const addTodo = () => {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
};

const createTodoItem = (text) => {
  const todoItem = document.createElement("li");
  todoItem.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  const todoSpan = document.createElement("span");
  todoSpan.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", deleteTodo);

  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoSpan);
  todoItem.appendChild(deleteBtn);

  return todoItem;
};

const deleteTodo = (event) => {
  const todoItem = event.target.parentNode;
  todoList.removeChild(todoItem);
};

const toggleTodo = (event) => {
  const todoItem = event.target.parentNode;
  if (todoItem.classList.contains("completed"))
    todoItem.classList.remove("completed");
  else todoItem.classList.add("completed");
};

todoList.addEventListener("change", toggleTodo);

const enterEvent = (event) => {
  if (event.key === "Enter") addTodo();
};

addTodoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keydown", enterEvent);

// example tasks
const initialTodos = [
  "Wash Car",
  "Pay Bill",
  "Exercise for at least 30 minutes"
];
initialTodos.forEach((todo) => {
  const todoItems = createTodoItem(todo);
  todoList.appendChild(todoItems);
});
