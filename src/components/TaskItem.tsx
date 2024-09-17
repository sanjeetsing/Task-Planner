import React, { useState } from 'react';
import { Task } from '../types';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface TaskItemProps {
  task: Task;
  updateTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, updateTask, deleteTask }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleCompletion = () => {
    updateTask({
      ...task,
      status: task.status === 'completed' ? 'in-progress' : 'completed',
    });
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <ListItem 
      className={`task-item ${task.status} ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <Checkbox 
        checked={task.status === 'completed'} 
        onChange={toggleCompletion} 
        color="primary"
      />
      <ListItemText
        primary={task.title}
        secondary={`Due: ${task.dueDate.toLocaleDateString()} | Priority: ${task.priority}`}
        className={`task-text ${task.status}`}
      />
      <IconButton onClick={() => deleteTask(task.id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton onClick={() => updateTask(task)}>
        <EditIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;
