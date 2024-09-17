import React from 'react';
import { Task } from '../types';
import TaskItem from './TaskItem';
import { List } from '@mui/material';

interface TaskListProps {
  tasks: Task[];
  updateTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, updateTask, deleteTask }) => {
  const sortedTasks = tasks.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime() || a.priority - b.priority);

  return (
    <List>
      {sortedTasks.map(task => (
        <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
      ))}
    </List>
  );
};

export default TaskList;
