import React from 'react';
import { Link } from 'react-router-dom'

const Step2 = ({ email, password, handleChange, prevStep }) => (
    <>
        <header>
            <h2>Logo</h2>
            <h2>Welcome</h2>
            <div className="email-container">
                <Link to='/users/signup'>{email}</Link>
            </div>
        </header>
        <input type="password" placeholder="Enter Your Password"
            value={password}
            onChange={handleChange('password')} />
        <section className="form-bottom">
            <button onClick={prevStep}>Prev</button>
            <button>Log In</button>
        </section>
    </>
);

export default Step2;