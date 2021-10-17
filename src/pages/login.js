import React, {useState} from 'react';
import {
    Avatar, Button, FormControl,
    Input, InputLabel, Link, Paper, Typography
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {GoogleLogin} from 'react-google-login';
import {refreshTokenSetup} from "../utils/refreshToken";


function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj)
        refreshTokenSetup(res)
    }
    const onFailure = (res) => {
        console.log('[Login Failed] res:', res)
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
                        type="submit"
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
                    <GoogleLogin
                        fullWidth
                        clientId="967108240725-u1q2197n0rb75qevr0b2dj108h71sefk.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>
            </Paper>
        </main>
    )

    /*async function login() {
        try {
            await firebase.login(email, password)
            props.history.replace('/dashboard')
        } catch(error) {
            alert(error.message)
        }
    }*/
}

export default Login;