import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { openSideNav, closeSideNav } from '../../actions/sidenav_actions';
import { clearVideos } from '../../actions/video_actions';
import Header from './header';

const mapStateToProps = ({ session, entities: { users }, ui: { sideNav } }) => ({
    currentUser: users[session.currentUserId],
    sideNav
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    openSideNav: () => dispatch(openSideNav()),
    closeSideNav: () => dispatch(closeSideNav()),
    clearVideos: () => dispatch(clearVideos())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));