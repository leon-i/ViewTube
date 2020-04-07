import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
    user: {
        email: '',
        password: '',
        step: 1,
        loginError: ''
    },
    errors: state.errors.login,
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));