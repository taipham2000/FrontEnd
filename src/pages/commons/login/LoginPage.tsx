import './loginPage.scss';
import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { TokenLogin } from '../../../models/TokenLogin';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { LoginGmailInput } from '../../../models/LoginGmailInput';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { AppBar } from '@mui/material';
import GoogleButton from 'react-google-button';
import wing from '../../../assets/images/wing.png';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const imageLoginGoogle =
  'https://icon-library.com/images/login-with-google-icon/login-with-google-icon-3.jpg';
const imageFptLogin =
  'https://thuthuatnhanh.com/wp-content/uploads/2022/05/background-trang-tinh.jpg';
const background =
  'https://hcmuni.fpt.edu.vn/Data/Sites/1/media/hinh-gioi-thieu-dai-hoc-fpt/hcm.png';
const theme = createTheme();

const LoginPage = () => {
  const [userName, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  let navigate = useNavigate();

  const handleSubmit = () => {
    // event.preventDefault();
    if (userName === 'taipham' && password === '12345678') {
      console.log('Tai dep trai');
      navigate('/admin/homePage');
    }
  };

  const handleUserName = (event: any) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };
  return (
    <div className="body-a">
      <img className="footer-image" src={wing}></img>
      <div className="body-login">
        <>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  letterSpacing: 1,
                  fontWeight: 600,
                  marginTop: 15,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div className="background-content">
                  <div className="img-content">
                    <img src={imageFptLogin} />
                  </div>

                  <Box
                    component="form"
                    // onSubmit={handleSubmit}
                    sx={{ mt: -20, padding: 1, fontSize: 40 }}
                  >
                    <label>Login</label>
                    <TextField
                      margin="normal"
                      required
                      id="email"
                      label="User Name"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      className="field-input"
                      onChange={(e: any) => {
                        handleUserName(e);
                      }}
                    />
                    <TextField
                      margin="normal"
                      required
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      className="field-input"
                      onChange={(e: any) => {
                        handlePassword(e);
                      }}
                    />
                    <div className="submit">
                      <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                          mt: 3,
                          mb: 2,
                        }}
                        onClick={(e: any) => {
                          handleSubmit();
                        }}
                      >
                        Sign in
                      </Button>
                    </div>
                  </Box>
                </div>
              </Box>
            </Container>
          </ThemeProvider>
        </>
      </div>
    </div>
  );
};

export default LoginPage;
