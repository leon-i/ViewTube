// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { requestVideos } from '../../../actions/video_actions';
// import CommentForm from './video_index';

// const mapStateToProps = ({ session, entities: { users, videos } }, ownProps) => ({
//     currentUser: users[session.currentUserId],
//     video: ownProps.video,
//     formType: 'reply'
// });

// const mapDispatchToProps = dispatch => ({
//     createComment: (videoId, comment) => dispatch(requestVideos(videoId, comment)),
// });

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));