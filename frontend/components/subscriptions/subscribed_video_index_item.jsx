import React from 'react';
import { Link } from 'react-router-dom';
import { createView } from '../../util/video_api_util';

const creatVideoView = (videoId, viewerId) => {
    return (e) => {
        const className = e.target.className;
        if (typeof className !== 'object' && className !== 'subscribed-username') {
            createView({ video_id: videoId, viewer_id: viewerId });
        }
    }
}

const SubscribedVideoIndexItem = ({video, currentUserId}) => (
    <div className='profile-video-container' onClick={creatVideoView(video.id, currentUserId)}>
        <Link to={`/videos/${video.id}`}>
            <div className='video-index-thumbnail'>
                <img src={video.thumbnailUrl} alt="video-thumbnail" />
            </div>
        </Link>
            <div className='video-details flex'>
                <div className='subscribed-profile-detail-text flex'>
                <Link to={`/videos/${video.id}`}>
                    <h4>{video.title}</h4>
                </Link>
                <Link to={`/users/${video.uploader.id}`}>
                    <p className='subscribed-username'>{video.uploader.username}</p>
                </Link>
                <Link to={`/videos/${video.id}`}>
                    <p>{`${video.shorthandViews} • ${video.timeSinceUpload}`}</p>
                </Link>
                </div>
            </div>
    </div>
);

export default SubscribedVideoIndexItem;