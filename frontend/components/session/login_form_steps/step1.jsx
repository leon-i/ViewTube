import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Step1 = ({ email, handleChange, handleEnter, handleDemoLogin, nextStep, loginError }) => {
    const errorBar = loginError.length ? 'form-error' : '';
    const errorClass = loginError.length ? 'errors flex' : 'no-errors flex';
    return (
        <>
            <header>
                <img src={window.logo} className='logo' alt='Viewtube'/>
                <h2>Sign In</h2>
                <h3>to continue to ViewTube</h3>
            </header>
            <input className={errorBar} type="text" placeholder="Email"
                value={email}
                onChange={handleChange('email')}
                onKeyDown={handleEnter} />
            <div className={errorClass}>
                <FontAwesomeIcon icon={faExclamationCircle} />
                { loginError }
            </div>
            <section className='demo-login flex'>
                <p>Too lazy? Use Demo mode to sign in instantly.</p>
                <h5 onClick={handleDemoLogin}>Demo login</h5>
            </section>
            <section className="form-bottom flex">
                <Link to='/signup'>Create account</Link>
                <button onClick={nextStep}>Next</button>
            </section>
        </>
    )
};

export default Step1;