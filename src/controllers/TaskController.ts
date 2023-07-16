import express, { Request, Response } from 'express';
import TaskManager from '../managers/TaskManager';

const router = express.Router();
const taskManager = new TaskManager();

router.post('/', (req: Request, res: Response) => {
  try {
    const { title, assignee, dueDate, priority } = req.body;
    const task = taskManager.createTask(title, assignee, dueDate, priority);
    res.status(201).json(task);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id/assignee', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { assignee } = req.body;
    const task = taskManager.assignTask(id, assignee);
    res.json(task);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:id/comments', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const task = taskManager.addCommentToTask(id, comment);
    res.json(task);
  } catch (error : any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', (req: Request, res: Response) => {
  const tasks = taskManager.getTasks();
  res.json(tasks);
});

export default router;
