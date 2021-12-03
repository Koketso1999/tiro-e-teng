import React, {Component} from 'react';
import '../css/main.css';
import {MuiThemeProvider, createTheme} from '@material-ui/core/styles'
import {CssBaseline} from "@material-ui/core";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useState} from "react";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";
import Landing from "./landing";
//fixed naming error
import ErrorBoundary from "../utils/errorBoundary";
import Profile from "./profile";

import {AuthProvider} from "../constants/Authentication/Auth";
import PrivateRoute from "../constants/Authentication/PrivateRoute";

const theme = createTheme({

})

function App() {
    const [firebaseInitialized, setFirebaseInitialized] = useState(false)

    return (

        //firebaseInitialized !== false ?
        <MuiThemeProvider theme={theme}>
            <ErrorBoundary>
                <AuthProvider>
                    <CssBaseline/>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Route exact path="/login" component={Login}/>
                            <PrivateRoute  exact path="/profile" component={Profile}/>
                            <Route exact path="/register" component={Signup}/>
                            <PrivateRoute  exact path="/home" component={Home}/>
                        </Switch>
                    </Router>
                </AuthProvider>
            </ErrorBoundary>
        </MuiThemeProvider>
    )
    //: <div id="loader"><CircularProgress/></div>;
}

export default App;
