import React, { useState } from 'react';
import { TextField, Grid } from '@mui/material';

interface TaskFilterProps {
  filterTasks: (query: string) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filterTasks }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    filterTasks(e.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Search Tasks"
          fullWidth
          value={query}
          onChange={handleSearchChange}
        />
      </Grid>
    </Grid>
  );
};

export default TaskFilter;
