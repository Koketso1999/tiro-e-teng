import React, {useState} from 'react';
import {Button, Container, FormControl, Input, InputLabel, Typography} from "@material-ui/core";
import {createUser, signInFb, signInGoogle, signInUser} from "../constants/config/firebase";
import {FacebookLoginButton, GoogleLoginButton, LinkedInLoginButton} from "react-social-login-buttons";
import {Link} from "react-router-dom";
import {Alert} from "antd";


function Signup(props) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const handleOnFbSignIn = () => {
        signInFb().then(r => console.log(8, "done"))
    }
    const handleOnGoogleSignIn = () => {
        signInGoogle().then(r => console.log(8, "done"))
    }

    const handleSignUp = async () => {
        try {
            if (password === confirmPass){
                await createUser(username,email, password)
                props.history.replace('/profile')
            } else {
                alert("confirm password and password should match")
            }

        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <main className='main'>
            <div>
                <Container>
                    <Typography component="h1" variant="h5" marginTop='100px'>
                        Create Account
                    </Typography>
                    <form className='form' type='submit'>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input type='text'
                                   id="username"
                                   name="username"
                                   autoComplete="off"
                                   onChange={e => setUsername(e.target.value)}/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Adress</InputLabel>
                            <Input type='email'
                                   id="email"
                                   name="email"
                                   autoComplete="off"
                                   onChange={e => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input type='password'
                                   id="password"
                                   name="password"
                                   autoComplete="off"
                                   onChange={e => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password2">Confirm Password</InputLabel>
                            <Input type='password'
                                   id="password2"
                                   name="password2"
                                   autoComplete="off"
                                   onChange={e => setConfirmPass(e.target.value)}
                            />
                        </FormControl>
                        <Button
                            variant="contained"
                            fullWidth="true"
                            color="primary"
                            className='button'
                            onClick={() => handleSignUp()}
                        >
                            Sign Up
                        </Button>
                        <Button
                            variant="contained"
                            fullWidth="true"
                            component={Link}
                            to="/login"
                            color="primary"
                            className='button'>
                            Login Instead
                        </Button>
                        <Typography>
                            or
                        </Typography>
                        <FacebookLoginButton
                            text="Sign in with Facebook"
                            onClick={() => handleOnFbSignIn()}
                        />

                        <GoogleLoginButton
                            text="Sign in with Google"
                            onClick={() => handleOnGoogleSignIn()}
                        />
                        <LinkedInLoginButton
                            text="Sign in with linkedIn"
                            onClick={() => handleOnGoogleSignIn()}
                        />
                    </form>
                </Container>
            </div>
        </main>
    );
}

export default Signup;