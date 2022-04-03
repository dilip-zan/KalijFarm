import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Zoom } from "react-reveal";
import { signin, signup } from '../../redux/actions/Auth';
import useStyles from './Styles';
import Input from './Input';
import GoogleAuth from './GoogleAuth';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'instant',
    });
  }, []);
  const [formData, setFormData] = useState(initialState);
  //   form usestate i can save the form data in paylaod and later on in mongoodb
  const [isSignup, setIsSignup] = useState(false);
  // using isSignup usesatate hook i can save the data in payload
  const [Error, setError] = useState(null);
  const [ErrorSignIn, setErrorSignIn] = useState(null);
  const { errorAuth, errorAuthSignIn } = useSelector((state) => state.Auth);
  useEffect(() => {
    setError(errorAuth);
    setErrorSignIn(errorAuthSignIn);
  }, [errorAuth, errorAuthSignIn]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const handleShowPassword = () => { setShowPassword(!showPassword) };
  const handleShowCPassword = () => { setShowCPassword(!showCPassword) };

  const switchMode = () => {
    setError(null);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      // dispatching meaning giving different thinks
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Zoom>
      <Container component="main" maxWidth="xs" className={classes.container} >
        <Paper className={classes.paper} elevation={6}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
          <GoogleAuth />
          <form className={classes.formData} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              {isSignup && <Input name="confirmPassword" label="Repeat Password" type={showCPassword ? 'text' : 'password'} handleShowCPassword={handleShowCPassword} handleChange={handleChange} />}
            </Grid>
            {ErrorSignIn && <Typography className={classes.Error} fullWidth>{ErrorSignIn}</Typography>}
            {Error && <Typography className={classes.Error} fullWidth>{Error}</Typography>}
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Zoom>
  );
};

export default SignUp;