import { connect } from 'react-redux';
import { requestComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = ({ session, entities: { users, videos, comments } }, ownProps) => ({
    currentUser: users[session.currentUserId],
    currentVideoId: ownProps.currentVideoId,
    video: ownProps.video,
    comments
});

const mapDispatchToProps = dispatch => ({
    requestComments: videoId => dispatch(requestComments(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);