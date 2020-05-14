import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SideNavOpen from './sidenav_open';
import { closeModal } from '../../actions/modal_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ModalSideNav = ({ currentUser, modal, history, closeModal }) => {
    const modalSideNavClass = modal === 'sidenav' ? 'modal-sidenav flex modal-sidenav-open' 
        : 'modal-sidenav flex modal-sidenav-closed';
    return (
        <div className={modalSideNavClass}>
            <header className='modal-sidenav-header flex'>
                <button onClick={closeModal}><FontAwesomeIcon icon={faBars} className='bars large-icon' /></button>
                <Link to='/'>
                    <img src={window.logo} className='logo' alt='ViewTube' />
                </Link>
            </header>
            <SideNavOpen currentUser={currentUser} login={() => history.push('/login')} history={history} closeModal={closeModal} />
        </div>
    )
}

const mapStateToProps = ({ session, entities: { users }, ui: { modal } }) => ({
    currentUser: users[session.currentUserId],
    modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalSideNav));