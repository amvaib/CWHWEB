const addbutton = document.getElementById('addtask');
const taskinput = document.getElementById('taskinput');

const tasklist = document.getElementById('tasklist');

taskinput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addTask(); // Call addTask when Enter key is pressed
    }
});

function addTask(){
    const task = taskinput.value.trim();
    if(task){
        createTaskElement(task);
        taskinput.value = " ";

    }

    else {
        alert('PLEASE ENTER A TASK');
    }
}

addbutton.addEventListener('click', addTask);

function createTaskElement(task){

    const listitem = document.createElement('li');
    listitem.textContent = task;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteTask';

    listitem.appendChild(deleteButton);
    tasklist.appendChild(listitem);

    deleteButton.addEventListener('click',()=>{
        tasklist.removeChild(listitem);
        
    })
    saveTasks();

}

function saveTasks(){
    let tasks = [];

    tasklist.querySelectorAll('li').forEach((item) => {
        tasks.push(item.textContent.replace('Delete',"").trim());
    });

    localStorage.setItem('tasks' , JSON.stringify(tasks));

}

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(createTaskElement);
}

window.onload = loadTasks;