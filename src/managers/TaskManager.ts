import Task from '../models/Task';

class TaskManager {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  createTask(title: string, assignee: string, dueDate: string, priority: string): Task {
    const task = new Task(title, assignee, dueDate, priority);
    this.tasks.push(task);
    return task;
  }

  assignTask(id: string, assignee: string): Task {
    const task = this.getTaskById(id);
    task.assignee = assignee;
    return task;
  }

  addCommentToTask(id: string, comment: string): Task {
    const task = this.getTaskById(id);
    task.addComment(comment);
    return task;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }
}

export default TaskManager;
