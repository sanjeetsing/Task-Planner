import React, { useState } from 'react';
import { Task } from './types';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import AlertMessage from './AlertMessage';
import { Container } from '@mui/material';
import './TaskManager.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [alert, setAlert] = useState<{ open: boolean, message: string, severity: 'success' | 'info' | 'warning' | 'error' }>({
    open: false,
    message: '',
    severity: 'success'
  });

  const showAlert = (message: string, severity: 'success' | 'info' | 'warning' | 'error') => {
    setAlert({ open: true, message, severity });
  };

  const closeAlert = () => {
    setAlert({ ...alert, open: false });
  };

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    setFilteredTasks([...tasks, task]);
    showAlert('Task added successfully!', 'success');
  };

  const updateTask = (updatedTask: Task) => {
    const updatedTasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    setEditingTask(null); // Clear editing state
    showAlert('Task updated successfully!', 'info');
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    showAlert('Task deleted successfully!', 'warning');
  };

  const filterTasks = (query: string) => {
    const lowerQuery = query.toLowerCase();
    setFilteredTasks(tasks.filter(task =>
      task.title.toLowerCase().includes(lowerQuery) || 
      task.description.toLowerCase().includes(lowerQuery)
    ));
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  return (
    <Container className="container">
       {/* Header */}
       <header className="app-header">
        <h1>Task List</h1>
      </header>
      <TaskForm addTask={addTask} updateTask={updateTask} editingTask={editingTask} />
      <TaskFilter filterTasks={filterTasks} />
      <TaskList tasks={filteredTasks} updateTask={handleEditTask} deleteTask={deleteTask} />
      <AlertMessage 
        open={alert.open} 
        onClose={closeAlert} 
        severity={alert.severity} 
        message={alert.message} 
      />
    </Container>
  );
};

export default App;
