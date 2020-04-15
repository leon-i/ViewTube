import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const SignupNames = ({firstName, lastName, handleEnter, handleChange, errors}) => {
    const firstNameError = errors.First ? 'form-error' : '';
    const firstNameErrorDisplay = errors.First ? 'signup-errors' : 'signup-no-errors';

    const lastNameError = errors.Last ? 'form-error' : '';
    const lastNameErrorDisplay = errors.Last ? 'signup-errors' : 'signup-no-errors';

    return (
        <section className="name-inputs flex">
            <div className='first-name'>
                <input className={firstNameError} type="text" placeholder="First name"
                    value={firstName}
                    onKeyDown={handleEnter}
                    onChange={handleChange('first_name')} />
                <div className={firstNameErrorDisplay}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    {errors.First}
                </div>
            </div>
            <div className='last-name'>
                <input className={lastNameError} type="text" placeholder="Last name"
                    value={lastName}
                    onKeyDown={handleEnter}
                    onChange={handleChange('last_name')} />
                <div className={lastNameErrorDisplay}>
                    <FontAwesomeIcon icon={faExclamationCircle} />
                    {errors.Last}
                </div>
            </div>
        </section>
    )
}

export default SignupNames;