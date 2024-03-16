// script.js
document.addEventListener('DOMContentLoaded', function () {
    const taskContainer = document.getElementById('task-container');
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');

    // Fetch tasks from the backend
    function fetchTasks() {
        // Use fetch or Axios to fetch tasks from the backend
    }

    // Display tasks
    function displayTasks(tasks) {
        taskContainer.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.textContent = task.title;
            taskContainer.appendChild(taskElement);
        });
    }

    // Event listener for form submission
    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskTitle = taskInput.value.trim();
        if (taskTitle === '') {
            return;
        }
        // Send task data to the backend
        fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: taskTitle })
        })
        .then(response => response.json())
        .then(data => {
            // Handle successful task creation
            fetchTasks(); // Refresh task list
            taskInput.value = ''; // Clear input field
        })
        .catch(error => {
            console.error('Error creating task:', error);
            // Handle error
        });
    });

    // Initial fetch of tasks
    fetchTasks();
});
