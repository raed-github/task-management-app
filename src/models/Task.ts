import { v4 as uuidv4 } from 'uuid';

class Task {
  id: string;
  title: string;
  assignee: string;
  dueDate: string;
  priority: string;
  comments: string[];

  constructor(title: string, assignee: string, dueDate: string, priority: string) {
    this.id = uuidv4();
    this.title = title;
    this.assignee = assignee;
    this.dueDate = dueDate;
    this.priority = priority;
    this.comments = [];
  }

  addComment(comment: string) {
    this.comments.push(comment);
  }
}

export default Task;