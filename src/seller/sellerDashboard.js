// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Container,
//   CssBaseline,
// } from '@mui/material';
// 
// import { Link, Route, Routes } from 'react-router-dom';

// import DashboardComponent from '../pages/pages/dashboard';
// import ProductsComponent from '../pages/pages/product';
// import OrdersComponent from '../pages/pages/Orders';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   // ... your existing styles
// }));

// function SellerDashboard() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar position="fixed" className={classes.appBar}>
//         <Toolbar>
//           <Typography variant="h6">Seller Dashboard</Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//         anchor="left"
//       >
//         <List>
//           <ListItem button component={Link} to="/dashboard">
//             <ListItemText primary="Dashboard" />
//           </ListItem>
//           <ListItem button component={Link} to="/products">
//             <ListItemText primary="Products" />
//           </ListItem>
//           <ListItem button component={Link} to="/orders">
//             <ListItemText primary="Orders" />
//           </ListItem>
//           {/* Add more menu items as needed */}
//         </List>
//       </Drawer>
//       <main className={classes.content}>
//         <Container>
//           <Routes>
//             <Route path="/dashboard">
//               {/* Dashboard component */}
//               <DashboardComponent />
//             </Route>
//             <Route path="/products">
//               {/* Products component */}
//               <ProductsComponent />
//             </Route>
//             <Route path="/orders">
//               {/* Orders component */}
//               <OrdersComponent />
//             </Route>
//           </Routes>
//         </Container>
//       </main>
//     </div>
//   );
// }

// export default SellerDashboard;
import React,{useState} from 'react';
// import  useNavigate  from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  Button,
  ListItem,
  ListItemText,
  Container,
  CssBaseline,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
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
    padding: theme.spacing(3),
  },
}));

function SellerDashboard({ isOpen, toggleSidebar,sidebarRef}) {
    const classes = useStyles();
    // const history = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(
      localStorage.getItem('isLoggedIn') === 'true'
    );
    
    const handleLogout = () => {
      // Clear user authentication status and token (if applicable)
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      // Redirect to the login page or any other desired destination
    //   history.push('/login');
    };

  return (
    <div className={classes.root}>
      <CssBaseline />
       <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" sx={{flexGrow:1}}>Seller Dashboard</Typography>
          {isLoggedIn && (
            <Button
              className={classes.logoutButton}
              color="inherit"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        open={isOpen} ref={sidebarRef}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Orders" />
          </ListItem>
          {/* Add more menu items as needed */}
        </List>
      </Drawer>
      <main className={classes.content}>
        <Container>
          {/* Seller dashboard content goes here */}
        </Container>
      </main>
    </div>
  );
}

export default SellerDashboard;
