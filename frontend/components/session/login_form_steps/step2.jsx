import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Step2 = ({ email, password, handleChange, handleSubmit, prevStep, errors }) => {
    const errorBar = errors.length ? 'form-error' : '';
    const errorClass = errors.length ? 'errors flex' : 'no-errors flex';

    return (
        <>
            <header>
                <h2>Logo</h2>
                <h2>Welcome</h2>
                <div className="email-container flex" onClick={prevStep}>
                    <FontAwesomeIcon icon={faUserCircle} />
                    <p>{email}</p>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </header>
            <input className={errorBar} type="password" placeholder="Enter Your Password"
                value={password}
                onChange={handleChange('password')} />
            <div className={errorClass}>
                <FontAwesomeIcon icon={faExclamationCircle} />
                { errors }
            </div>
            <section className="form-bottom flex">
                <button onClick={prevStep}>Prev</button>
                <button onClick={handleSubmit}>Log In</button>
            </section>
        </>
    )
};

export default Step2;