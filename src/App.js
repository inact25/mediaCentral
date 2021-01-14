import './App.css';
import React from 'react';
import Layout from "./layouts/Layout";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Redirect exact from='/' to="/general"/>
                    <Route exact path="/:newsID" component={Layout}/>
                    <Route path="/">
                        <Layout/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
