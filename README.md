# task-management-app

Task Management System: Develop a script that allows users to create, assign, and track tasks within a team or organization. Users should be able to add due dates, priorities, and comments to each task.


# Testing

### create tasks
Post /tasks
```html
{
     "title": "Task 1",
     "assignee": "John Doe",
     "dueDate": "2022-12-31",
     "priority": "High"
}
```

### add assignee
put /tasks/{id}/assignee

```html
{
    "assignee": "Jane Smith"
}
```


### add comment
post /tasks/{id}/comments

```html
{
    "assignee": "Jane Smith"
}
```

### Get all tasks
GET /tasks

### Using GUI
localhost:8081/index.html



