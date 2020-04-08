import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlay } from '@fortawesome/free-solid-svg-icons';

const SideNavClosed = (props) => {
    return (
        <div className='sidenav-closed'>
            <ul className='sidenav-links flex'>
                <li>
                    <FontAwesomeIcon icon={faHome} />
                    <p>Home</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Subscriptions</p>
                </li>
            </ul>
        </div>
    )
}

export default SideNavClosed;