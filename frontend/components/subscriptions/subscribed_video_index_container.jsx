import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestSubscribedVideos, clearVideos } from '../../actions/video_actions';
import SubscribedVideoIndex from './subscribed_video_index';

const mapStateToProps = ({ session, entities: { users, videos }, ui: { sideNav } }) => ({
    currentUser: users[session.currentUserId],
    videos,
    sideNav
});

const mapDispatchToProps = dispatch => ({
    requestSubscribedVideos: subscriberId => dispatch(requestSubscribedVideos(subscriberId)),
    clearVideos: () => dispatch(clearVideos())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubscribedVideoIndex));