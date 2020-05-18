import React from 'react';
import { Link } from 'react-router-dom';

const SignInMenu = () => (
    <div className='sign-in-menu flex'>
        <h2>Want to subscribe to this channel?</h2>
        <p>Sign in to subscribe to this channel.</p>
        <div className='link-container'>
            <Link to='/login'>SIGN IN</Link>
        </div>
    </div>
);

export default SignInMenu;