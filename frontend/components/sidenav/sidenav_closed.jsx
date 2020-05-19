import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";

const SideNavClosed = () => {
    return (
        <div className='sidenav-closed'>
            <ul className='sidenav-links flex'>
                <Link to='/'>
                    <li>
                        <FontAwesomeIcon icon={faHome} />
                        <p>Home</p>
                    </li>
                </Link>
                <Link to='/subscriptions'>
                    <li>
                        <FontAwesomeIcon icon={faPlay} />
                        <p>Subscriptions</p>
                    </li>
                </Link>
                <a href='https://www.github.com/leon-i/ViewTube' target='_blank'>
                    <li>
                        <FontAwesomeIcon icon={faGithub} className='XS-icon' />
                        <p>Github</p>
                    </li>
                </a>
                <a href='https://www.linkedin.com/in/isak-leon-4924901a9/' target='_blank'>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} className='XS-icon' />
                        <p>Linkedin</p>
                    </li>
                </a>
                <a href='https://www.angel.co/u/isak-leon' target='_blank'>
                    <li>
                        <FontAwesomeIcon icon={faAngellist} className='XS-icon' />
                        <p>AngelList</p>
                    </li>
                </a>
            </ul>
        </div>
    )
}

export default SideNavClosed;