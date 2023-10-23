import React, { useState } from "react";
import { AppBar, Toolbar,Link, Button,IconButton, Typography,FormControlLabel,Checkbox,FormGroup } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import makeStyles from "@mui/styles/makeStyles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
}));



const Navbar = ({ toggleSidebar,darkMode,toggleDarkMode }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const classes = useStyles();

  return (
    <AppBar position="static">
     
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Your E-Commerce Website
        </Typography>


        <Link button="true"
      color="inherit" href="/seller/create-account">
          Create Seller Account
        </Link>
        <FormGroup>
  <FormControlLabel
    control={<Checkbox sx={{marginLeft:3,}}  icon={<WbSunnyIcon />} checkedIcon={<Brightness2OutlinedIcon />} color='error' checked={darkMode} onChange={toggleDarkMode} />}
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
