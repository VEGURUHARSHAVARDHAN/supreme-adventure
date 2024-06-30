document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const prioritySelect = document.createElement('select');
        const removeButton = document.createElement('button');

        prioritySelect.className = 'priority-select';
        prioritySelect.innerHTML = `
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        `;
        prioritySelect.addEventListener('change', updatePriority);

        removeButton.textContent = 'Remove';
        removeButton.className = 'remove';
        removeButton.addEventListener('click', () => {
            li.classList.add('fade-out');
            setTimeout(() => {
                li.remove();
            }, 500);
        });

        li.textContent = taskText;
        li.appendChild(prioritySelect);
        li.appendChild(removeButton);
        taskList.appendChild(li);

        setTimeout(() => {
            li.classList.add('visible');
        }, 10);

        updatePriority.call(prioritySelect);
    }

    function updatePriority() {
        const priority = this.value;
        const li = this.parentElement;
        li.classList.remove('priority-high', 'priority-medium', 'priority-low');
        if (priority === 'high') {
            li.classList.add('priority-high');
        } else if (priority === 'medium') {
            li.classList.add('priority-medium');
        } else if (priority === 'low') {
            li.classList.add('priority-low');
        }
    }
});
