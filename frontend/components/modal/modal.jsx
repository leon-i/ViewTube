import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import VideoUploadFormContainer from '../video/video_upload_form/video_upload_form_container';
import ModalSideNav from '../sidenav/modal_sidenav';

const Modal = ({ modal, closeModal }) => {
    if (!modal) return null;
    let component;
    let modalChildClass;
    switch(modal) {
        case 'videoUpload':
            component = <VideoUploadFormContainer />;
            modalChildClass = 'modal-child';
            break;
        case 'sidenav':
            component = <ModalSideNav />
            modalChildClass = 'modal-child-2';
            break;
        default:
            return null;
    }

    return (
        <div className='modal-background' onClick={closeModal}>
            <div className={modalChildClass} onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);