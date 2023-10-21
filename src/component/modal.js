import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton,Divider }  from "@mui/material"
import {Visibility,VisibilityOff} from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  width: 500,
  boxShadow: 24,
  p: 4,
  display:'flex',
  flexDirection: "column",
  justifyContent: "center",
    alignItems: "center",
  borderRadius:'10px',
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(true);
// for password
const [showPassword, setShowPassword] = React.useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
const [formData, setFormData] = React.useState({ username: '', password: '' });

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (event) => {
  event.preventDefault();
  // You can perform validation and login logic here
  console.log('Submitted:', formData.username, formData.password);
};



  return (
    <div>
      <Button onClick={handleOpen} color='secondary' variant="contained" fontWeight="600">Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Welcome</h2>
          <form action='home.js' onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
        </Box>
      </Modal>
    </div>
  );
}
 