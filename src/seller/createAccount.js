import React, { useState } from 'react';
import { TextField, Button,IconButton, Container,InputAdornment, Typography, Grid } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Seller from './sellerDashboard'
function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = () => {
    // Replace this with your actual login validation logic.
    if (email === 'example@email.com' && password === 'password') {
      setLoggedIn(true);
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };
  return (
    <Container maxWidth="sm">
      {loggedIn ? (
        // If logged in, show the seller dashboard.
        <div>
        <Seller/>
        </div>
      ) : (
        // If not logged in, show the login form.
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h4" align="center">Seller Dashboard Login</Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
      fullWidth
      label="Password"
      type={showPassword ? 'text' : 'password'}
      variant="outlined"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handlePasswordVisibility}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      )}
    </Container>
  );
}

export default CreateAccount;
