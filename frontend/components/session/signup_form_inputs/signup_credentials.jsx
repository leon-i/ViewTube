import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const SignupCredentials = ({ email, username, password, handleEnter, handleChange, errors }) => {
    const emailError = errors.Email ? 'form-error' : '';
    const emailErrorDisplay = errors.Email ? 'signup-errors' : 'signup-no-errors';

    const usernameError = errors.Username ? 'form-error' : '';
    const usernameErrorDisplay = errors.Username ? 'signup-errors' : 'signup-no-errors';

    const passwordError = errors.Password ? 'form-error' : '';
    const passwordErrorDisplay = errors.Password ? 'signup-errors' : 'signup-no-errors';

    return (
        <section className="credentials">
            <div className='signup-email'>
                <input className={emailError} type="text" placeholder="Your email address"
                    value={email}
                    onKeyDown={handleEnter}
                    onChange={handleChange('email')} />
                <div className={emailErrorDisplay}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    {errors.Email}
                </div>
            </div>
            <div className='signup-username'>
                <input className={usernameError} type="text" placeholder="Your desired username"
                    value={username}
                    onKeyDown={handleEnter}
                    onChange={handleChange('username')} />
                <div className={usernameErrorDisplay}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    {errors.Username}
                </div>
            </div>
            <div className='signup-password'>
                <input className={passwordError} type="password" placeholder="Password"
                    value={password}
                    onKeyDown={handleEnter}
                    onChange={handleChange('password')} />
                <div className={passwordErrorDisplay}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    {errors.Password}
                </div>
            </div>
        </section>
    )
}

export default SignupCredentials;