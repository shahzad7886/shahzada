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
  const handleClose = () => setOpen(false);
// for password
const [showPassword, setShowPassword] = React.useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
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
          <h2>LOG IN</h2>
          <TextField
          fullWidth
          label="Enter Your Name "
          placeholder="Type Name Here"
          multiline
        /> <TextField sx={{m:3}}
        fullWidth
        label="Enter Your Email "
        placeholder="Type Email Here"
        multiline
      />
       <FormControl  variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            placeholder='Password'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="outlined" fullWidth sx={{m:3,}}>Login</Button>
        </Box>
      </Modal>
    </div>
  );
}
 