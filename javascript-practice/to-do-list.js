const inputField = document.getElementById("new-task-input");
const buttonTask = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

buttonTask.addEventListener("click", () => {
  const taskContent = inputField.value.trim();
  if (taskContent === "") {
    alert("Please enter a task");
    return;
  }
  const li = document.createElement("li");
  li.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const cbId = `task-${Date.now()}`;
  checkbox.id = cbId;

  const label = document.createElement("label");
  label.htmlFor = cbId;
  label.textContent = taskContent;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑️";
  deleteButton.className = "delete-task-icon";

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
  inputField.value = "";
  updateTasks();

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
    updateTasks();
  });

  deleteButton.addEventListener("click", () => {
    li.remove();
    updateTasks();
  });
});

function updateTasks() {
  const totalTasks = taskList.children.length;
  const completedTasks = taskList.querySelectorAll(
    "input[type='checkbox']:checked",
  ).length;
  const remainingTasks = totalTasks - completedTasks;

  const completedEl = document.getElementById("tasks-completed");
  const remainingEl = document.getElementById("tasks-remaining");

  if (completedEl) completedEl.textContent = `${completedTasks} completed`;
  if (remainingEl)
    remainingEl.textContent = `${remainingTasks} tasks remaining`;
}

updateTasks();
taskList.addEventListener("change", updateTasks);
taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    updateTasks();
  }
});
