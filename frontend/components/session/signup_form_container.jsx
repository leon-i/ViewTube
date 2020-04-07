import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => ({
    user: {
        email: '',
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        passwordError: ''
    },
    errors: state.errors.login,
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));