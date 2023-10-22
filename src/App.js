import React, { useState, useEffect, useRef } from 'react';
import './App.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './Sidebar';
import Navbar from './component/appbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home  from './pages/home';
import About from './pages/About';
import Product from './pages/product';
function App() {
 // State for theme color
 const savedThemeColor = localStorage.getItem('selectedThemeColor') || '#2196F3';
 const [themeColor, setThemeColor] = useState(savedThemeColor);

 // State for dark mode
 const savedDarkMode = localStorage.getItem('darkMode') === 'true';
 const [darkMode, setDarkMode] = useState(savedDarkMode);

 // State for sidebar
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 const themeColors = {
   Blue: '#2196F3',
   Red: '#F44336',
   Green: '#4CAF50',
   Yellow: '#FF9800',
   Purple: '#9C27B0',
   RAL :"#44e632",
 };

 // Create light and dark themes
 const lightTheme = createTheme({
   palette: {
     primary: {
       main: themeColor,
     },
   },
 });

 const darkTheme = createTheme({
    palette: {
      primary: {
        main: themeColor,
      },
      type: 'dark', // Set the palette type to 'dark' for dark mode
      // Customize other dark mode theme options here
      background: {
        paper: '#333', // Background color for paper surfaces
        default: "#585a5e", // Default background color
      },
      text: {
        primary: '#fff', // Set the text color to white
        // You can customize other text colors here
      },
    },
    // Add other theme configurations
  });


 // Determine the current theme based on dark mode
 const currentTheme = darkMode ? darkTheme : lightTheme;

 const changeTheme = (newColor) => {
   setThemeColor(newColor);
   localStorage.setItem('selectedThemeColor', newColor);
 };

 const toggleSidebar = () => {
   setIsSidebarOpen(!isSidebarOpen);
 };

 const closeSidebar = () => {
   setIsSidebarOpen(false);
 };

 const sidebarRef = useRef();

 useEffect(() => {
   const handleOutsideClick = (event) => {
     if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
       closeSidebar();
     }
   };

   document.addEventListener('mousedown', handleOutsideClick);

   return () => {
     document.removeEventListener('mousedown', handleOutsideClick);
   };
 }, [isSidebarOpen]);

 useEffect(() => {
   // Save the dark mode preference to localStorage
   localStorage.setItem('darkMode', darkMode.toString());
 }, [darkMode]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Navbar toggleSidebar={toggleSidebar} darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Sidebar
        themeColors={themeColors}
        theme={currentTheme}
        changeTheme={changeTheme}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        sidebarRef={sidebarRef}
      />

   <BrowserRouter>

    <Routes>
   <Route path="/" Component={Home}/>
     <Route path="/about" Component={About}/>
     <Route path="/product" Component={Product}/>
    </Routes>

</BrowserRouter>



    </ThemeProvider>
  );
}

export default App;
