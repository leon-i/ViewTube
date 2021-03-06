import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestVideos, clearVideos } from '../../../actions/video_actions';
import VideoIndex from './video_index';

const mapStateToProps = ({ session, entities: { users, videos }, ui: { sideNav } }) => ({
    currentUser: users[session.currentUserId],
    videos,
    sideNav
});

const mapDispatchToProps = dispatch => ({
    requestVideos: data => dispatch(requestVideos(data)),
    clearVideos: () => dispatch(clearVideos())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoIndex));