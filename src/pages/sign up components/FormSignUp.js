import React from 'react'
import {
    Button,
    Typography,
    AppBar,
    Toolbar,
    Container,
    Box,
    FormControl,
    Input,
    InputLabel
  } from "@material-ui/core";
 //add firebase to project
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSlf-x_P9F1v9XfhL1TOVRe-QFIjl9Mhw",
    authDomain: "tiroeteng.firebaseapp.com",
    projectId: "tiroeteng",
    storageBucket: "tiroeteng.appspot.com",
    messagingSenderId: "644928000729",
    appId: "1:644928000729:web:fd232968aa55e2cd2fa4c8",
    measurementId: "G-64TEJ16YDT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const FormSignUp = () => {
    const auth = getAuth();
    const faceBookProvider = new FacebookAuthProvider();

    const handleOnClick = (provider) => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log(result.user);
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
  
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
    }
      
    return (
        <>
           <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>    
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tiroeng
          </Typography>    
        </Toolbar>
      </AppBar>
    </Box>

        <main className='main'>
            <div>
                <Container>
                <Typography component="h1" variant="h5" marginTop='100px' >
                    Create Account
                </Typography>
                <form className='form' type='submit'>
                <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input type='text' id="username" name="username" autoComplete="off" />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Adress</InputLabel>
                        <Input type='email' id="email" name="email" autoComplete="off" />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input type='password' id="password" name="password" autoComplete="off" />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password2">Confirm Password</InputLabel>
                        <Input type='password' id="password2" name="password2" autoComplete="off" />
                    </FormControl>
                    <Button
                        type="submit"                  
                        variant="contained"
                        color="primary"
                        className='button'>
                        Sign Up
                    </Button>
                    <Typography>
                        or
                    </Typography>
                    <Button
                        type="submit"                  
                        variant="contained"
                        color="primary"
                        className='button'
                        onClick={ () =>handleOnClick(faceBookProvider)}>
                        Sign Up With facebook
                    </Button>
                </form>
                </Container>
            </div>
        </main>

        </>
            
    )
}

export default FormSignUp;
