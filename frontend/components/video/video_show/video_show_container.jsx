import { connect } from 'react-redux';
import { requestVideo } from '../../../actions/video_actions';
import VideoShow from './video_show';

const mapStateToProps = ({ session, entities: { users, videos } }, ownProps) => ({
    currentUser: users[session.currentUserId],
    video: videos[ownProps.match.params.videoId]
});

const mapDispatchToProps = dispatch => ({
    requestVideo: videoId => dispatch(requestVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);