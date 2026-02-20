const inputField = document.getElementById("new-task-input");
const buttonTask = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

buttonTask.addEventListener("click",()=>{
  const taskContent = inputField.value.trim();
  const newElement = document.createElement("p");
  newElement.textContent= taskContent;
  taskList.appendChild(newElement);
});