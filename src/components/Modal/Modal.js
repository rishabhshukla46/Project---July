import React from 'react';
import './Modal.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Modal({ toggleModal, onChange, onSubmit }) {
  const localOnClick = (e) => {
    toggleModal();
    onSubmit(e);
  }
  return (
    <div className="modal">
      <form onSubmit={onSubmit}>
        <div className="text-field">
          <TextField id="outlined-basic" label="Name" variant="outlined" name="name" onChange={onChange} />
        </div>
        <div className="text-field">
          <TextField id="outlined-basic" label="Company" variant="outlined" name="company" onChange={onChange} />
        </div>
        <div className="text-field">
          <TextField id="outlined-basic" label="Role" variant="outlined" name="role" onChange={onChange} />
        </div>
        <Button variant="contained" color="primary" onClick={localOnClick} >
          Add
        </Button>
      </form>
    </div>
  );
}