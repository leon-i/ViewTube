import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Splash));