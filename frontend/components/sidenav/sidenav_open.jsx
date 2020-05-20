import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlay, faFilm, faThumbsUp, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";

const SideNavOpen = ({ currentUser, login, history, closeModal }) => {
    const middleUl = currentUser ? (
        <>
            <li onClick={() => history.push(`/users/${currentUser.id}`)}>
                <div className='icon-container flex'>
                    <FontAwesomeIcon icon={faFilm} />
                </div>
                <p>Your Videos</p>
            </li>
            <li>
                <div className='icon-container flex'>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </div>
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
                <Link to='/' onClick={closeModal}>
                    <li>
                        <div className='icon-container flex'>
                            <FontAwesomeIcon icon={faHome} />
                        </div>
                        <p>Home</p>
                    </li>
                </Link>
                <Link to='/subscriptions' onClick={closeModal}>
                    <li>
                        <div className='icon-container flex'>
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                        <p>Subscriptions</p>
                    </li>
                </Link>
            </ul>
            <ul className='sidenav-middle flex'>
                {middleUl}
            </ul>
            <ul className='sidenav-bottom'>
                <a href='https://www.github.com/leon-i/ViewTube' target='_blank'>
                    <li>
                        <div className='icon-container flex'>
                           <FontAwesomeIcon icon={faGithub} className='XS-icon' /> 
                        </div>
                        <p>Github</p>
                    </li>
                </a>
                <a href='https://www.linkedin.com/in/isak-leon-4924901a9/' target='_blank'>
                    <li>
                        <div className='icon-container flex'>
                           <FontAwesomeIcon icon={faLinkedin} className='XS-icon' /> 
                        </div>
                        <p>LinkedIn</p>
                    </li>
                </a>
                <a href='https://www.angel.co/u/isak-leon' target='_blank'>
                    <li>
                        <div className='icon-container flex'>
                            <FontAwesomeIcon icon={faAngellist} className='XS-icon' />   
                        </div>
                        <p>AngelList</p>
                    </li>
                </a>
            </ul>
        </div>
    )
}

export default SideNavOpen;