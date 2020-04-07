import React from 'react';

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
        // this.setState({
        //     email: '',
        //     password: '',
        //     step: 1,
        //     loginError: ''
        // });
        this.props.history.push('/');
    }

    render() {
        const { email, username, first_name, last_name, password } = this.state;
        const errorBar = this.props.errors.length ? 'form-error' : '';

        return (
            <div className='session-form'>
                <section className='form-content signup'>
                    <header>
                        <h2>Logo</h2>
                        <h2>Create your ViewTube Account</h2>
                        <h3>to continue to ViewTube</h3>
                    </header>

                    <section className="name-inputs flex">
                        <input className={errorBar} type="text" placeholder="First name"
                            value={first_name}
                            onChange={this.handleChange('first_name')} />
                        <input className={errorBar} type="text" placeholder="Last name"
                            value={last_name}
                            onChange={this.handleChange('last_name')} />
                    </section>

                    <input className={errorBar} type="text" placeholder="Your email address"
                        value={email}
                        onChange={this.handleChange('email')} />
                    <input className={errorBar} type="text" placeholder="Your desired username"
                        value={username}
                        onChange={this.handleChange('username')} />
                    <input className={errorBar} type="password" placeholder="Password"
                        value={password}
                        onChange={this.handleChange('password')} />

                    <section className="form-bottom flex">
                        <button onClick={this.handleSubmit}>Sign Up</button>
                    </section>
                </section>
            </div>
        )
    }
}

export default SignupForm;