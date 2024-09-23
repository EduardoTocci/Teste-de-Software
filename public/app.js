document.addEventListener('DOMContentLoaded', () => {
  

  function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  

  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

// O código que adiciona eventos pode ser chamado diretamente.

  const addTaskBtn = document.getElementById('add-task-btn');
  addTaskBtn.addEventListener('click', addTask);

})
