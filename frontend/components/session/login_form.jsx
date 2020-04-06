import React from 'react';
import Step1 from './login_form_steps/step1';
import Step2 from './login_form_steps/step2';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
        this.setState({
            email: '',
            password: '',
            step: 1
        });
    }

    prevStep() {
        this.setState({ step: this.state.step -= 1 });
    }

    nextStep() {
        this.setState({ step: this.state.step += 1 });
    }

    render() {
        const currentStep = this.state.step === 1 ? 
            (<Step1 email={this.state.email} 
                handleChange={this.handleChange} 
                nextStep={this.nextStep} />) : 
            (<Step2 email={this.state.email} 
                password={this.state.password} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} 
                prevStep={this.prevStep} />);

        return (
            <div className='login-form'>
                <section className='form-content'>
                    { currentStep }
                </section>
            </div>
        )
    }
}

export default LoginForm;