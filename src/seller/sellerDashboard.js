// import React, { useState } from 'react';
// import { AppBar,
//     Toolbar,
//     Typography,
//     Drawer,
//     List,
//     MenuItem,
//     MenuList,
//     Menu,
//     Button,
//     ListItem,
//     ListItemText,
//     IconButton,
//     ListItemIcon,
//     Container,
//     CssBaseline,} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu'
// import makeStyles from "@mui/styles/makeStyles";
// import { Link, Route, Switch, useHistory } from 'react-router-dom';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   // ... your existing styles
//   logoutButton: {
//     marginLeft: 'auto',
//   },
// }));

// function SellerDashboard() {
//   const classes = useStyles();
//   // const history = useHistory();
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     localStorage.getItem('isLoggedIn') === 'true'
//   );

//   const handleLogout = () => {
//     // Clear user authentication status and token (if applicable)
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//     // Redirect to the login page or any other desired destination
//     // history.push('/login');
//   };

//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//      const toggleDrawer = () => {
//        setIsDrawerOpen(!isDrawerOpen);
//      };
//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>

//         <IconButton
//         color="inherit"
//         aria-label="open drawer"
//         edge="start"
//         onClick={toggleDrawer}
//         className={classes.menuButton}
//       >
//         <MenuIcon />
//       </IconButton>
//           <Typography variant="h6">Seller Dashboard</Typography>
//           {isLoggedIn && (
//             <Button
//               className={classes.logoutButton}
//               color="inherit"
//               onClick={handleLogout}
//             >
//               Logout
//             </Button>
//           )}
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         open={isDrawerOpen}
//         onClose={toggleDrawer}
//         className={classes.drawer}
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//       >
//         <div>
//           <List>
//             <ListItem button>
//               <ListItemText primary="Menu Item 1" />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary="Menu Item 2" />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary="Menu Item 3" />
//             </ListItem>
//           </List>
//         </div>
//       </Drawer>
//       {/* ... rest of your code */}
//     </div>
//   );
// }

// export default SellerDashboard;
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function SellerDashboard() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default SellerDashboard;