import React from 'react';
import Home from './pages/Home/'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import GlobalFonts from './components/font';
import Accompagnement from "./pages/Accompagnement";

function App() {
    const theme = {
        orange: '#e7650f',
    };




  return (
    <div className="App">
        <Router>
            <Switch>
                <ThemeProvider theme={theme}>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/accompagnement"} component={Accompagnement}/>
                <GlobalFonts/>
                </ThemeProvider>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
