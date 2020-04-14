import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createComment } from '../../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = ({ session, entities: { users, videos } }, ownProps) => ({
    currentUser: users[session.currentUserId],
    videoId: ownProps.match.params.videoId,
    comment: {
        author_id: '',
        commentable_type: '',
        commentable_id: '',
        body: ''
    },
    formType: 'comment'
});

const mapDispatchToProps = dispatch => ({
    createComment: (videoId, comment) => dispatch(createComment(videoId, comment)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));