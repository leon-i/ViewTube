import React from 'react';
import { Link } from 'react-router-dom'

const Step2 = ({ email, password, handleChange, handleSubmit, prevStep, errors }) => {
    const errorClass = errors.length ? 'form-error' : '';

    return (
        <>
            <header>
                <h2>Logo</h2>
                <h2>Welcome</h2>
                <div className="email-container">
                    <Link to='/users/signup'>{email}</Link>
                </div>
            </header>
            <input className={errorClass} type="password" placeholder="Enter Your Password"
                value={password}
                onChange={handleChange('password')} />
            <div className='errors'>
                { errors.map((error, idx) => (<li key={idx}>{error}</li>)) }
            </div>
            <section className="form-bottom">
                <button onClick={prevStep}>Prev</button>
                <button onClick={handleSubmit}>Log In</button>
            </section>
        </>
    )
};

export default Step2;