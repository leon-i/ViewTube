import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReply } from '../../../actions/comment_actions';
import ReplyForm from './reply_form';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => ({
    currentUser: users[session.currentUserId],
    videoId: ownProps.match.params.videoId,
    formType: 'reply'
});

const mapDispatchToProps = dispatch => ({
    createReply: (reply) => dispatch(createReply(reply))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReplyForm));