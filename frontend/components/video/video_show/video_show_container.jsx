import { connect } from 'react-redux';
import { requestVideo } from '../../../actions/video_actions';
import { createVideoLike, deleteVideoLike } from '../../../actions/like_actions';
import VideoShow from './video_show';

const mapStateToProps = ({ session, entities: { users, videos } }, ownProps) => ({
    currentUser: users[session.currentUserId],
    video: videos[ownProps.match.params.videoId],
    videoLikes: videos[ownProps.match.params.videoId].likes,
    videoDislikes: videos[ownProps.match.params.videoId].dislikes
});

const mapDispatchToProps = dispatch => ({
    requestVideo: videoId => dispatch(requestVideo(videoId)),
    createVideoLike: like => dispatch(createVideoLike(like)),
    deleteVideoLike: like => dispatch(deleteVideoLike(like))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);