import { connect } from 'react-redux';
import { requestVideos } from '../../../actions/video_actions';
import VideoSideIndex from './video_side_index';

const mapStateToProps = ({ session, entities: { users, videos } }) => ({
    currentUser: users[session.currentUserId],
    videos
});

const mapDispatchToProps = dispatch => ({
    requestVideos: data => dispatch(requestVideos(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoSideIndex);