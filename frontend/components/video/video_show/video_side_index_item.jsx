import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const VideoSideIndexItem = ({ video }) => (
    <div className='side-index-item flex'>
        <Link to={`/videos/${video.id}`}>
            <img src={video.thumbnailUrl} alt="video-thumbnail" />
        </Link>
        <div className='side-index-item-content flex'>
            <div className='side-index-item-details flex'>
                <h2>
                    <Link to={`/videos/${video.id}`}>
                        {video.title}
                    </Link>
                </h2>
                <Link to={`/users/${video.uploader.id}`}>
                    <p className='side-username'>{video.uploader.username}</p>
                </Link>
                <p>{`${video.shorthandViews} • ${video.uploadDate}`}</p>
            </div>
            <FontAwesomeIcon icon={faEllipsisV} />
        </div>
    </div>
)

export default VideoSideIndexItem;