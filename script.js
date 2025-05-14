function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();
    
    if (taskText !== ""){
       const listItem = document.createElement('li');
       listItem.textContent =task;
       
       const deleteButton = document.createElement('button');
       deleteButton.textContent = 'Delete';
       deleteButton.onclick = function () {
           listItem.remove();
           // Tab to edit
       };
       
       listItem.appendChild(deleteButton);
       taskList.appendChild(listItem);
       taskInput.value = "";
       
       
    };   
    // Tab to edit
};