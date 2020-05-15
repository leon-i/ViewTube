import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItem = ({ video }) => (
    <div className='search-index-item flex'>
        <Link to={`/videos/${video.id}`}>
            <div className='search-thumbnail-container'>
                <img src={video.thumbnailUrl} />
            </div>
        </Link>
        <section className='search-item-details flex'>
            <Link to={`/videos/${video.id}`}>
                <h2>{video.title}</h2>
            </Link>
            <div className='show-item-credentials flex'>
                <Link to={`/users/${video.uploader.id}`}
                    className='username'>{video.uploader.username}</Link>
                <Link to={`/videos/${video.id}`}>
                    <p>{`• ${video.shorthandViews} • ${video.timeSinceUpload}`}</p>
                </Link>
            </div>
            <Link to={`/videos/${video.id}`}>
                <p className='search-item-description'>{video.description}</p>
            </Link>
        </section>
    </div>
);

export default SearchIndexItem;