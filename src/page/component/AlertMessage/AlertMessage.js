import React, {forwardRef} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { PropaneSharp } from '@mui/icons-material';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertMessages(props) {
    const configSnackBar = {
        vertical: "top",
        horizontal: "right"
    };

    const { vertical, horizontal } = configSnackBar;

  return (
    <Snackbar 
     open={props.open} 
     autoHideDuration={4000} 
     onClose={props.onClose}
     anchorOrigin={{vertical, horizontal }}
     key={vertical + horizontal}
    >
        <Alert 
        onClose = {props.onclose} 
        severity={props.severity} 
        sx={{ width: '100%' }}>
            {props.label}
        </Alert>
    </Snackbar>
  );
}
