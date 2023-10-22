import React from 'react';
import { AppBar, Toolbar, IconButton, Typography,FormControlLabel,Checkbox,FormGroup } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
const Navbar = ({ toggleSidebar,darkMode,toggleDarkMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Your E-Commerce Website
        </Typography>
        <FormGroup>
  <FormControlLabel
    control={<Checkbox  icon={<WbSunnyIcon />} checkedIcon={<Brightness2OutlinedIcon />} color='error' checked={darkMode} onChange={toggleDarkMode} />}
  />
</FormGroup>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
        >
          <PaletteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
