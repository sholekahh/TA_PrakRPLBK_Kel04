import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InputTextMessage(props) {
  return (
      <TextField id={props.id} label={props.label} variant={props.variant} 
      fullWidth={props.fullWidth} required={props.required} margin="normal"
      autoFocus={props.autofocus} name={props.name} type={props.type} autoComplete={props.autoComplete} />
  );
}