const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText != ""){
        tasks.push({text:taskText,completed:false});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks(){
    const li = tasks.map((task, index)=>`
    <li>
        <input type="checkbox" id="task-${index}" ${task.completed ? "checked":""} onchange="()=>toggleTask(${index})">
        <label for="task-${index}">${task.text}</label>
    </li>
    `).join('');
    taskList.innerHTML = li;
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks(){
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

addTaskBtn.addEventListener('click',addTask);
clearCompletedBtn.addEventListener('click',clearCompletedTasks);

displayTasks();