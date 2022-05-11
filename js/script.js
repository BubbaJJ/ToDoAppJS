const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const tasks = document.getElementById("tasks");

// getTasks
const getTasks = () => {
  let allTasks = localStorage.getItem("taskList");
  allTasks = allTasks.split(",");
  console.log(allTasks);
  tasks.innerHTML = allTasks
    .map(
      (task) => `
    <div class="task">
    <div class="content">
    <input class="text" type="text" readonly="readonly" value="${task}">
    </div>
    <div class="actions">
    <button class="delete">Delete</button>
    </div>
    </div>
    `
    )
    .join("");
};

// addTask
const addTask = (task) => {
  let allTasks = localStorage.getItem("taskList"); // Hämtar alla element i localStorage
  allTasks = allTasks ? allTasks.split(",") : []; // Om allTasks är tomt så skapar vi en tom array
  allTasks.push(task); // Lägger till task i slutet av arrayen
  localStorage.setItem("taskList", allTasks); // Sparar alla element till localStorage
};

// deleteTask

// Form submit
form.onsubmit = (event) => {
  event.preventDefault();
  let task = input.value;
  addTask(task);
  getTasks();
  form.reset();
};

window.onload = getTasks;
