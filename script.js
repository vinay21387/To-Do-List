// Retrieve tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks on page load
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span id="task-${index}" contenteditable="false">${task}</span>
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Add new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
        taskInput.value = "";
    } else {
        alert("Please enter a valid task!");
    }
}

// Edit task
function editTask(index) {
    const taskElement = document.getElementById(`task-${index}`);
    taskElement.contentEditable = true;
    taskElement.focus();
    taskElement.addEventListener("blur", function () {
        taskElement.contentEditable = false;
        tasks[index] = taskElement.textContent;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
}

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

// Display tasks on page load
displayTasks();
