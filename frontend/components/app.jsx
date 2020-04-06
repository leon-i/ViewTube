import React from 'react';
import { Route } from "react-router-dom";
import LoginFormContainer from './session/login_form_container';

const App = () => (
    <div>
        <h1>ViewTube</h1>
        <Route path='/login' component={LoginFormContainer} />
    </div>
);

export default App;