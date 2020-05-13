import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlay, faFilm, faThumbsUp, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const SideNavOpen = ({ currentUser, login, history }) => {
    const middleUl = currentUser ? (
        <>
            <li onClick={() => history.push(`/users/${currentUser.id}`)}>
                <FontAwesomeIcon icon={faFilm} />
                <p>Your Videos</p>
            </li>
            <li>
                <FontAwesomeIcon icon={faThumbsUp} />
                <p>Liked Videos</p>
            </li>
        </>
    ) : (
        <div className='signin-section flex'>
            <h4>Sign in to like videos, comment, and subscribe.</h4>
            <div className='signin-btn flex' onClick={login}>
                <FontAwesomeIcon icon={faUserCircle} className='small-icon' />
                <p>SIGN IN</p>
            </div>
        </div>
    );
    return (
        <div className='sidenav-open flex'>
            <ul className='sidenav-top'>
                <li>
                    <FontAwesomeIcon icon={faHome} />
                    <p>Home</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Subscriptions</p>
                </li>
            </ul>
            <ul className='sidenav-middle flex'>
                {middleUl}
            </ul>
        </div>
    )
}

export default SideNavOpen;