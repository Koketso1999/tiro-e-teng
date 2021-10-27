import '../css/main.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {CircularProgress, CssBaseline} from "@material-ui/core";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useState} from "react";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";
import Landing from "./landing";
//fixed naming error
import ErrorBoundary from "../utils/errorBoundary";

const theme = createMuiTheme()

function App() {
    const [firebaseInitialized, setFirebaseInitialized] = useState(false)


    return (

        //firebaseInitialized !== false ?

        <MuiThemeProvider theme={theme}>
            <ErrorBoundary>
                <CssBaseline/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Signup}/>
                        <Route exact path="/home" component={Home}/>
                    </Switch>
                </Router>
            </ErrorBoundary>
        </MuiThemeProvider>
    )
    //: <div id="loader"><CircularProgress/></div>;
}

export default App;
