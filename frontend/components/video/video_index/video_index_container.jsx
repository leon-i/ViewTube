import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { requestVideos } from '../../../actions/video_actions';
import VideoIndex from './video_index';

const mapStateToProps = ({ session, entities: { users, videos } }) => ({
    currentUser: users[session.currentUserId],
    videos
});

const mapDispatchToProps = dispatch => ({
    requestVideos: data => dispatch(requestVideos(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);