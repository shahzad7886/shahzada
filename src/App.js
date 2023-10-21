import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import { createMuiTheme, ThemeProvider, Button } from '@mui/material';
import Home from './pages/home.js'
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
    <Home/>
    </ThemeProvider>
  );
}

export default App;
