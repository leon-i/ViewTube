import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        return (
            <div className='login-form'>
                <section className='form-content'>
                    <header>
                        <h2>Logo</h2>
                        <h2>Sign In</h2>
                        <h3>to continue to ViewTube</h3>
                    </header>
                    <input type="text" placeholder="Email" 
                    value={this.state.email} 
                    onChange={this.handleChange('email')}/>
                    <p>Forgot email?</p>
                    <section className="form-bottom">
                        <Link to='/users/signup'>Create Account</Link>
                        <button>Next</button>
                    </section>
                </section>
            </div>
        )
    }
}

export default LoginForm;