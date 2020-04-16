import React from 'react';
import { Link } from 'react-router-dom';
import { createView } from '../../../util/video_api_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.videos;
    }

    componentDidMount() {
        this.props.requestVideos();
    }

    handleVideoClick(video) {
        return (e) => {
            const className = e.target.className;
            if (typeof className !== 'object' && className !== 'username') {
                const { currentUser, history } = this.props;
                const viewer_id = currentUser ? currentUser.id : null;
                createView({video_id: video.id, viewer_id: viewer_id});
                history.push(`videos/${video.id}`);
            }
        }
    }

    render() {
        const videos = Object.values(this.props.videos);
        // const recommendedVideos = videos.slice(0, 8);
        if (!videos) return null;
        const videoRenders = videos.map((video, idx) => (
            <div key={idx} className='video-container' onClick={this.handleVideoClick(video)}>
                <div className='video-index-thumbnail'>
                    <img src={video.thumbnailUrl} alt="video-thumbnail"/>
                </div>
                    <div className='video-details flex'>
                        <Link to={`/users/${video.uploader.id}`}>
                            <FontAwesomeIcon icon={faUserCircle} />
                        </Link>
                        <div className='detail-text flex'>
                            <h4>{video.title}</h4>
                            <Link to={`/users/${video.uploader.id}`} 
                                className='username'>{video.uploader.username}</Link>
                            <p>{`${video.shorthandViews} • ${video.timeSinceUpload}`}</p>
                        </div>
                    </div>
            </div>
        ))
        return (
            <div className='video-index-container flex'>
                <h1 className='row-title'>Recommended</h1>
                <section className='video-index flex'>
                            { videoRenders }
                </section>
            </div>
        )
    }
}

export default VideoIndex;