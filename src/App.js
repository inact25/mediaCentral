import './App.css';
import Layout from "./layouts/Layout";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default App;
