function addTask()
{
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if(taskInput.ariaValueMax.trim() !== '')
        {
        //create new task item
        var li = document.createElement('li');
        li.textContent = taskInput.value;

        //add Checkbox for marking as completed
        var Checkbox = document.createElement('input');
        Checkbox.type = 'checkbox';
        Checkbox.addEventListener('change',function()
    {
        if(Checkbox.checked)
        {
            li.style.textDecoration = 'line-through';
        }
        else
        {
            li.style.textDecoration = 'none';
        }
    })

    //delete buttone

    var deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function(){
        li.remove();
        updateLocalStorage();
    });
    //append checkbox and delete button to task item
    li.appendChild(Checkbox);
    li.appendChild(deleteButton);

    //append task item to task list
    taskList.appendChild(li);

    //clear input field
    taskInput.value = '';

    //update localStorage
    updateLocalStorage();


        }
}

//function to update tasks in localStorage
function updateLocalStorage(){
    var tasks = [];
    var taskInput = document.getElementById('taskList').getElementsByTagName('li');

    //store tasks in array
    for(var i = 0; i < taskList.length;i++){
        tasks.push({
            task:taskList[i].textContent,
            completed: taskList[i].getElementsByTagName('input')[0].checked
        });
    }
    //save tasks to localStorage
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function loadTasks(){
    var tasks = JSON.parse(localStorage.getItem('tasks'));

    if(tasks){
        var taskList = document.getElementById('taskList');

        //iterate through stored tasks and create list items
        tasks.foreach(function(task){
            var li = document.createElement('li');
            li.textContent = task.task;

            //add checkbox and delete button as before
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change',function(){
                if(checkbox.checked)
                {
                    li.style.textDecoration = 'line-through';
                }
                else
                {

                    li.style.textDecoration = 'none';
                }
                updateLocalStorage();
            });

            li.appendChild(checkbox);
            li.appendChild(deleteButton);
            taskList.appendChild(li);

            //update localStorage initially
            updateLocalStorage();
        });
    }
}
window.onload = loadTasks;