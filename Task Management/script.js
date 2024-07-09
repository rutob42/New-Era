const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit',function(event){
    event.preventDefault();

    const taskText = taskInput.value;
    if(taskText === '')
        return;

    addTask(taskText);
    taskInput.value = '';
});

function addTask(taskText){
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
        <button class="complete-btn">Complete</button>
    `;

    taskList.appendChild(li);

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click',function(){
        li.remove();
    });

    const completeBtn = li.querySelector('.complete-btn');
    completeBtn.addEventListener('click', function(){
        li.classList.toggle('completed');
    });
}