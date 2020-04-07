import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = ({session, entities: { users } }) => ({
    currentUser: users[session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);