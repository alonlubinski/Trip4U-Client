import React, { useState } from 'react'
import { Avatar, Button, Container, CssBaseline, FormControlLabel, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './SignupSection.css';

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
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      }
}));

function SignupSection() {

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repassword: '',
        passwordsMatch: true,
        terms: false
    });
    
    const classes = useStyles();

    const history = useHistory();

    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
        if(state.password !== state.repassword){
            setState(prevState => ({
                ...prevState,
                passwordsMatch: false
            }))
        } else {
            setState(prevState => ({
                ...prevState,
                passwordsMatch: true
            }))
        }
    }

    const handleCheck = (e) => {
        setState({...state, [e.target.name]: !state.terms});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.firstName.trim() === '' || state.lastName.trim() === '' || state.email.trim() === '' || state.password.trim() === '' || state.repassword.trim() === ''){
            alert("Please fill all the fields.");
        } else if(state.passwordsMatch) {
            alert("Passwords don't match.")
        } else if(!state.terms) {
            alert("You must read the terms and confirm them.");
        } else {
            console.log(state);
            const data = {
                "email": state.email,
                "password": state.password,
                "role": "TOURIST",
                "username": {
                    "firstName": state.firstName,
                    "lastName": state.lastName
                }
            }
            axios
                .post('http://localhost:2222/users/', data)
                .then(function(response){
                    if(response.status === 200){
                        alert("Success");
                        history.push('/login');
                    } else {
                        
                    }
                })
                .catch(function(error){
                    alert(error.response.data.message);
                });
        }
    }

    return (
        <div className="signup-container">
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="div" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                        <Avatar className={classes.avatar}><LockOutlined/></Avatar>
                        <h1>Registration</h1>
                    </Typography>
                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField variant="outlined" label="First Name" id="firstName" name="firstName" required fullWidth autoFocus onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField variant="outlined" label="Last Name" id="lastName" name="lastName" required fullWidth onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label="Email Address" id="email" name="email" required fullWidth onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label="Password" id="password" name="password" required fullWidth onChange={handleChange} type="password"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label="Re-Enter Password" id="repassword" name="repassword" required fullWidth onChange={handleChange} type="password"/>
                            </Grid>
                            <Grid item xs={12} >
                                <FormControlLabel
                                    control={<Checkbox value="terms" color="primary" onChange={handleCheck} name="terms"/>}
                                    label="Accept terms"/>
                            </Grid>
                        </Grid>
                        <div>
                            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Sign Up</Button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default SignupSection;
