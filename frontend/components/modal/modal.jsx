import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import VideoUploadFormContainer from '../video/video_upload_form/video_upload_form_container';
import ModalSideNav from '../sidenav/modal_sidenav';
import SignInMenu from '../subscriptions/sign_in_menu';

const Modal = ({ modal, closeModal }) => {
    if (!modal) return null;
    let component;
    let modalClass;
    let modalChildClass;
    switch(modal) {
        case 'videoUpload':
            component = <VideoUploadFormContainer />;
            modalClass = 'modal-background';
            modalChildClass = 'modal-child';
            break;
        case 'sidenav':
            component = <ModalSideNav />
            modalClass = 'modal-background';
            modalChildClass = 'modal-child-2';
            break;
        case 'signInMenu':
            component = <SignInMenu />
            modalClass = 'modal-background transparent';
            modalChildClass = 'modal-child-2';
            break;
        default:
            return null;
    }

    return (
        <div className={modalClass} onClick={closeModal}>
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