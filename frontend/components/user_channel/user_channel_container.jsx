import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearVideos } from '../../actions/video_actions';
import { requestUser } from '../../actions/user_actions';
import UserChannel from './user_channel';

const mapStateToProps = ({ session, entities: { users, videos }, ui: { sideNav } }, ownProps) => ({
    currentUser: users[session.currentUserId],
    userProfile: users[ownProps.match.params.userId],
    userProfileId: ownProps.match.params.userId,
    videos,
    sideNav
});

const mapDispatchToProps = dispatch => ({
    clearVideos: () => dispatch(clearVideos()),
    requestUser: userId => dispatch(requestUser(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserChannel));