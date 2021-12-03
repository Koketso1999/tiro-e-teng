import React, {useState} from 'react';
import {
    Avatar, Button, FormControl,
    Input, InputLabel, Paper, Typography
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {FacebookLoginButton, GoogleLoginButton, LinkedInLoginButton} from "react-social-login-buttons";
import {signInFb, signInGoogle, signInUser} from "../constants/config/firebase";
import { Link, withRouter } from 'react-router-dom'



function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnFbSignIn = () => {
        signInFb().then(r => console.log(8, "done"))
    }
    const handleOnGoogleSignIn = () => {
        signInGoogle().then(r => console.log(8, "done"))
    }

    return (
        <main className='main'>
            <Paper>
                <Avatar className='avatar'>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className='form' onSubmit={e => e.preventDefault() && false}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" autoComplete="off" autoFocus value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" id="password" autoComplete="off" value={password}
                               onChange={e => setPassword(e.target.value)}/>
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='button'>
                        Sign in
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/register"
                        className='button'>
                        Register
                    </Button>
                    <Typography>
                        or
                    </Typography>
                    <FacebookLoginButton
                        onClick={() => handleOnFbSignIn()}
                    />

                    <GoogleLoginButton
                        onClick={() => handleOnGoogleSignIn()}
                    />
                    <LinkedInLoginButton
                        onClick={() => handleOnGoogleSignIn()}
                    />
                </form>
            </Paper>
        </main>
    )

    async function login() {
        try {
            await signInUser(email, password)
            props.history.replace('/dashboard')
        } catch(error) {
            alert(error.message)
        }
    }
}

export default Login;