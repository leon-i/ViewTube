import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const CommentIndexItem = ({ comment }) => {
    return (
        <li className='comment flex'>
            <FontAwesomeIcon icon={faUserCircle} />
            <div className='comment-content flex'>
                <div className='comment-info flex'>
                    <h4>{comment.author.username}</h4>
                    <p>{comment.timeSinceCommented}</p>
                </div>
                <p>{comment.body}</p>
            </div>
            <h2>REPLY</h2>
        </li>
    )
}

export default CommentIndexItem;