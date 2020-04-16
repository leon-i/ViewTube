import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestVideos } from '../../actions/video_actions';
import UserChannel from './user_channel';

const mapStateToProps = ({ session, entities: { users, videos } }, ownProps) => ({
    currentUser: users[session.currentUserId],
    userProfileId: ownProps.match.params.userId,
    videos
});

const mapDispatchToProps = dispatch => ({
    requestVideos: data => dispatch(requestVideos(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserChannel));