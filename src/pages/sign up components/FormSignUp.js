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

const FormSignUp = () => {
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
                </form>
                </Container>
            </div>
        </main>

        </>
            
    )
}

export default FormSignUp;
