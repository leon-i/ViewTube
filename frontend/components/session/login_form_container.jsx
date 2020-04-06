import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
    user: {
        email: '',
        password: ''
    },
    errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));