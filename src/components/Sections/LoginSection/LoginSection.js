import React, { useState } from 'react';
import './LoginSection.css';
import { Avatar, Button, Container, CssBaseline, Grid, Link, Typography, Checkbox, TextField, FormControlLabel, makeStyles } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const useStyles = makeStyles( (theme) => ({
    paper: {
        backgroundColor: '#ffffff99',
        marginTop: theme.spacing(-10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15,
        border: '0px solid #000',
        borderRadius: 10
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.success.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(6.3)
      }
}));

function LoginSection() {

    const [state, setState] = useState({
        email: '',
        password: '',
        remember: false
    });
    
    const classes = useStyles();

    const history = useHistory();

    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleCheck = (e) => {
        setState({...state, [e.target.name]: !state.remember});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.email.trim() === '' || state.password.trim() === ''){
            alert("Please fill all the fields!");
        } else {
            console.log(state);
            axios
                .get('http://localhost:2222/users/login/' + state.email + '/' + state.password)
                .then(function(response){
                    if(response.status === 200){
                        console.log(response);
                        localStorage.setItem("email", response.data.email);
                        localStorage.setItem("firstName", response.data.username.firstName);
                        localStorage.setItem("lastName", response.data.username.lastName);
                        localStorage.setItem("role", response.data.role);
                        history.push('/home');
                    } else {
                        
                    }
                })
                .catch(function(error){
                    alert(error.response.data.message);
                });
        }
    }

    return (
        <div className="login-container">
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="div" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                        <Avatar className={classes.avatar}><LockOutlined/></Avatar>
                        <h1>Login</h1>
                    </Typography>
                    <form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField variant="outlined" label="Email Address" id="email" name="email" required fullWidth onChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField variant="outlined" label="Password" id="password" name="password" required fullWidth onChange={handleChange} type="password"/>  
                                </Grid>
                            </Grid>
                            <Grid item xs={12} >
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" onChange={handleCheck} name="remember"/>}
                                        label="Remember Me"/>
                            </Grid>
                            <div>
                                <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>Sign In</Button>
                            </div>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/sign-up" variant="body2">
                                        Don't have an account? Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
            </Container>
        </div>
    )
}

export default LoginSection;
