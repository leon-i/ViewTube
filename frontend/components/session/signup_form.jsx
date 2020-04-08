import React from 'react';
import { Link } from 'react-router-dom';
import SignupNames from './signup_form_inputs/signup_names';
import SignupCredentials from './signup_form_inputs/signup_credentials';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    organizeErrors(errors) {
        const errorObj = {};
        errors.forEach(error => {
            const firstWord = error.split(' ')[0];
            if (!errorObj[firstWord]) errorObj[firstWord] = firstWord === 'Email' 
                && error[6] === 'P' ? error.slice(6) : error;
        });

        return errorObj;
    }

    render() {
        const { email, username, first_name, last_name, password } = this.state;
        const { errors, clearSessionErrors } = this.props;
        const organizedErrors = errors.length ? this.organizeErrors(errors) : [];

        return (
            <div className='session-form'>
                <section className='form-content signup'>
                    <header>
                        <img src={window.logo} className='logo' alt='Viewtube' />
                        <h2>Create your ViewTube Account</h2>
                        <h3>to continue to ViewTube</h3>
                    </header>

                    <SignupNames firstName={first_name}
                        lastName={last_name}
                        handleChange={this.handleChange}
                        errors={organizedErrors} />

                    <SignupCredentials email={email}
                        username={username}
                        password={password}
                        handleChange={this.handleChange}
                        errors={organizedErrors} />

                    <section className="form-bottom flex">
                        <Link to='/login' onClick={clearSessionErrors}>Sign in instead</Link>
                        <button onClick={this.handleSubmit}>Sign up</button>
                    </section>
                </section>
            </div>
        )
    }
}

export default SignupForm;