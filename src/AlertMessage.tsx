import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

interface AlertMessageProps {
  open: boolean;
  onClose: () => void;
  severity: 'success' | 'info' | 'warning' | 'error';
  message: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ open, onClose, severity, message }) => {
  return (
    <Snackbar 
      open={open} 
      autoHideDuration={3000} 
      onClose={onClose} 
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity={severity} onClose={onClose}>{message}</Alert>
      </Stack>
    </Snackbar>
  );
};

export default AlertMessage;
