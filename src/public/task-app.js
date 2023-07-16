// Handle form submission to create a task
document.getElementById('createTaskForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const assignee = document.getElementById('assignee').value;
  const dueDate = document.getElementById('dueDate').value;
  const priority = document.getElementById('priority').value;

  fetch('/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, assignee, dueDate, priority })
  })
  .then(response => response.json())
  .then(task => {
    // Display the created task
    const taskTable = document.getElementById('taskTable');

    const taskRow = document.createElement('tr');
    taskRow.setAttribute('data-task-id', task.id);

    const titleCell = document.createElement('td');
    titleCell.textContent = task.title;
    taskRow.appendChild(titleCell);

    const assigneeCell = document.createElement('td');
    assigneeCell.textContent = task.assignee;
    taskRow.appendChild(assigneeCell);

    const dueDateCell = document.createElement('td');
    dueDateCell.textContent = task.dueDate;
    taskRow.appendChild(dueDateCell);

    const priorityCell = document.createElement('td');
    priorityCell.textContent = task.priority;
    taskRow.appendChild(priorityCell);

    const commentsCell = document.createElement('td');
    commentsCell.textContent = task.comments.join(', ');
    taskRow.appendChild(commentsCell);

    taskTable.querySelector('tbody').appendChild(taskRow);
  })
  .catch(error => console.error(error));
});

// Handle form submission to add an assignee
document.getElementById('addAssigneeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const taskId = document.getElementById('taskId').value;
  const assigneeName = document.getElementById('assigneeName').value;

  fetch(`/tasks/${taskId}/assignee`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ assignee: assigneeName })
  })
  .then(response => response.json())
  .then(task => {
    // Display the updated task
    const taskRow = document.querySelector(`tr[data-task-id="${task.id}"]`);

    const assigneeCell = taskRow.querySelector('td:nth-child(2)');
    assigneeCell.textContent = task.assignee;
  })
  .catch(error => console.error(error));
});

// Handle form submission to add a comment
document.getElementById('addCommentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const taskId = document.getElementById('taskId').value;
  const comment = document.getElementById('comment').value;

  fetch(`/tasks/${taskId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment })
  })
  .then(response => response.json())
  .then(task => {
    // Display the updated task
    const taskRow = document.querySelector(`tr[data-task-id="${task.id}"]`);

    const commentsCell = taskRow.querySelector('td:nth-child(5)');
    commentsCell.textContent = task.comments.join(', ');
  })
  .catch(error => console.error(error));
});

// Retrieve all tasks and display them
fetch('/tasks')
  .then(response => response.json())
  .then(tasks => {
    const taskTable = document.getElementById('taskTable');

    tasks.forEach(task => {
      const taskRow = document.createElement('tr');
      taskRow.setAttribute('data-task-id', task.id);

      const titleCell = document.createElement('td');
      titleCell.textContent = task.title;
      taskRow.appendChild(titleCell);

      const assigneeCell = document.createElement('td');
      assigneeCell.textContent = task.assignee;
      taskRow.appendChild(assigneeCell);

      const dueDateCell = document.createElement('td');
      dueDateCell.textContent = task.dueDate;
      taskRow.appendChild(dueDateCell);

      const priorityCell = document.createElement('td');
      priorityCell.textContent = task.priority;
      taskRow.appendChild(priorityCell);

      const commentsCell = document.createElement('td');
      commentsCell.textContent = task.comments.join(', ');
      taskRow.appendChild(commentsCell);

      taskTable.querySelector('tbody').appendChild(taskRow);
    });
  })
  .catch(error => console.error(error));