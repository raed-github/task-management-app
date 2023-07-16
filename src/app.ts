import express from 'express';
import path from 'path';
import TaskController from './controllers/TaskController';

const app = express();
const port = 8081;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/tasks', TaskController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});