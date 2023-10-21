import Navbar from './component/appbar.js'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { createMuiTheme, ThemeProvider, Button } from '@mui/material';
import Home from './pages/home.js'
import About from './pages/About.js'

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#006400"
      },
      secondary: {
        main: "#ffa500"
      }
    }
  });
  


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  
    </ThemeProvider>
  );
}

export default App;
