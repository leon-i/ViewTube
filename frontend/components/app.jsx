import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Main from './main';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <>
        <Modal />
        <Switch>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <Main />
        </Switch>
    </>
);

export default App;