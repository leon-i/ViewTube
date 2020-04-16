import React from 'react';
import Step1 from './login_form_steps/step1';
import Step2 from './login_form_steps/step2';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleChange = this.handleChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleEnterStep2 = this.handleEnterStep2.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleEnter(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            event.stopPropagation();
            this.nextStep();
        }
    }

    handleEnterStep2(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            this.handleSubmit(e);
        }
    }

    handleDemoLogin(e) {
        e.preventDefault();
        this.props.login({
            email: 'demouser@email.com',
            password: 'password'
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
        // this.setState({
        //     email: '',
        //     password: '',
        //     step: 1,
        //     loginError: ''
        // });
        // this.props.history.push('/');
    }

    prevStep() {
        this.setState({ step: this.state.step -= 1 });
    }

    nextStep() {
        const { email, step } = this.state;
        if (email === '') {
            this.setState({ loginError: ['Enter an email'] });
        } else if (email.indexOf('@') === -1) {
            this.setState({ loginError: ['Please enter a valid email'] });
        } else {
            this.setState({ step: step + 1, loginError: '' });
        }
    }

    render() {
        const { step, email, password, loginError } = this.state;

        const currentStep = step === 1 ? 
            (<Step1 email={email} 
                handleChange={this.handleChange}
                handleEnter={this.handleEnter}
                handleDemoLogin={this.handleDemoLogin}
                nextStep={this.nextStep}
                loginError={loginError} />) : 
            (<Step2 email={email} 
                password={password} 
                handleChange={this.handleChange}
                handleEnter={this.handleEnterStep2}
                handleSubmit={this.handleSubmit} 
                prevStep={this.prevStep} 
                errors = {this.props.errors} />);

        return (
            <div className='session-form'>
                <section className='form-content login'>
                    { currentStep }
                </section>
            </div>
        )
    }
}

export default LoginForm;