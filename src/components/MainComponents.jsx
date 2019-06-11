import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {Route, Router} from 'react-router';
import history from '../history';

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import PersonalAreaPage from "../pages/PersonalAreaPage";
import CutawayPage from '../pages/CutawayPage';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';

class MainComponent extends Component {

    render() {

        return (
            <Router history={history}>
                <div style = {style.wrapper}>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/login" render={() => <LoginPage />}/>
                    <Route exact path="/personalArea" component={PersonalAreaPage}/>
                    <Route path="/cutaway" component={CutawayPage}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/forgotPassword" component={ForgotPassword}/>

                </div>
            </Router>
        );
    }
}

export default connect()(MainComponent);

const style = { 
    wrapper: {
        width :'100%',
        height : '100%',
    }
};