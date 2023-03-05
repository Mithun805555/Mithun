let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");

function addTask() {
  let task = taskInput.value;
  if (task === "") {
    alert("Please enter a task.");
    return;
  }
  let taskItem = document.createElement("li");
  taskItem.innerText = task;
  taskList.appendChild(taskItem);
  taskInput.value = "";
}
