import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createVideo } from '../../../actions/video_actions';
import { closeModal } from '../../../actions/modal_actions';
import VideoUploadForm from './video_upload_form';

const mapStateToProps = ({ session, entities: { users } }) => ({
    currentUser: users[session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
    createVideo: video => dispatch(createVideo(video)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoUploadForm));