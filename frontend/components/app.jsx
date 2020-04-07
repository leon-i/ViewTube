import React from 'react';
import { Route, Link } from "react-router-dom";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>
        <h1>ViewTube</h1>
        <Route path='/login' component={LoginFormContainer} />
        <Route path='/signup' component={SignupFormContainer} />
        <Link to='/login'>Log In</Link>
    </div>
);

export default App;