import React, { useState, useEffect } from 'react';
import { Task } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { TextField, Button, Stack, Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material';

interface TaskFormProps {
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  editingTask: Task | null;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask, updateTask, editingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState(1);
  const [status, setStatus] = useState<'completed' | 'in-progress'>('in-progress');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
      setStatus(editingTask.status);
      
      if (editingTask.dueDate instanceof Date && !isNaN(editingTask.dueDate.getTime())) {
        setDueDate(editingTask.dueDate.toISOString().split('T')[0]); // Format to YYYY-MM-DD
      } else {
        setDueDate('');
      }
      
      setError('');
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Title is required.');
      return;
    }

    setError('');

    const task: Task = {
      id: editingTask ? editingTask.id : uuidv4(),
      title,
      description,
      dueDate: dueDate ? new Date(dueDate) : new Date(),
      priority,
      status
    };

    if (editingTask) {
      updateTask(task);
    } else {
      addTask(task);
    }

    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority(1);
    setStatus('in-progress');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="task-form">
      <Stack spacing={2}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={!!error}
          helperText={error}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
          <TextField
            label="Due Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <TextField
            label="Priority"
            type="number"
            fullWidth
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value))}
          />
        </Stack>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value as 'completed' | 'in-progress')}
          >
            <MenuItem value="in-progress">In Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          {editingTask ? 'Update Task' : 'Add Task'}
        </Button>
      </Stack>
    </Box>
  );
};

export default TaskForm;
