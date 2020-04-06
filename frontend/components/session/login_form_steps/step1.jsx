import React from 'react';
import { Link } from 'react-router-dom'

const Step1 = ({ email, handleChange, nextStep }) => (
    <>
        <header>
            <h2>Logo</h2>
            <h2>Sign In</h2>
            <h3>to continue to ViewTube</h3>
        </header>
        <input type="text" placeholder="Email"
            value={email}
            onChange={handleChange('email')} />
        <section className="form-bottom">
            <Link to='/users/signup'>Create Account</Link>
            <button onClick={nextStep}>Next</button>
        </section>
    </>
);

export default Step1;