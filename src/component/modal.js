import * as React from 'react';
import Box from '@mui/material/Box';
import { useNavigate  } from 'react-router-dom';
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
  const history = useNavigate ();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
// for password
const [formData, setFormData] = React.useState({ username: '', password: '' });
const [showPassword, setShowPassword] = React.useState(false);
const [errors, setErrors] = React.useState({});

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
};

const handlePasswordVisibilityToggle = () => {
  setShowPassword(!showPassword);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const { username, password } = formData;
  
  // Form validation
  const validationErrors = {};
  if (username.trim() === '') {
    validationErrors.username = 'Username is required';
  }
  if (password.trim() === '') {
    validationErrors.password = 'Password is required';
  }

  if (Object.keys(validationErrors).length === 0) {
    // You can perform authentication logic here if the form is valid
    console.log('Submitted:', username, password);
    // Reset the form after submission
    setFormData({ username: '', password: '' });

    // Redirect to the home page
    history('/about');
  } else {
    setErrors(validationErrors);
  }
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
          <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          error={!!errors.username}
          helperText={errors.username}
        />
        <TextField
          label="Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          error={!!errors.password}
          helperText={errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handlePasswordVisibilityToggle}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
 