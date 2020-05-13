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
        this.props.clearVideos();
        this.props.requestVideos();
    }

    shuffleVideos(videos) {
        for (let i = videos.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [videos[i], videos[j]] = [videos[j], videos[i]];
        }

        return videos;
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
        const { videos, sideNav } = this.props;
        const allVideos = Object.values(videos);
        if (!videos) return null;
        const videoIndexWidth = sideNav ? 'partial-width' : 'full-width';
        const videoRenders = allVideos.map((video, idx) => (
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
        ));
        const recommendedVideos = videoRenders.slice(0, 8);
        let spacerKey = 0;
        while (recommendedVideos.length % 4 !== 0) {
            recommendedVideos.push(
                <div key={`spacer-${spacerKey}`} className='video-spacer video-container'></div>
            );
            spacerKey++;
        }
        const rest = videoRenders.slice(8);
        if (rest.length) {
            while (rest.length % 4 !== 0) {
                rest.push(
                    <div key={`spacer-${spacerKey}`} className='video-spacer video-container'></div>
                )
            }
            spacerKey++;
        }
        const restRender = rest.length ? (
            <>
                <section className='video-index flex'>
                    <div className='index-divider'></div>
                    {rest}
                </section>
            </>
        ) : (
            <>
            </>
        );

        return (
            <div className={`video-index-container flex ${videoIndexWidth}`}>
                <h1 className='row-title'>Recommended</h1>
                <section className='video-index flex'>
                    { recommendedVideos }
                </section>
                {restRender}
            </div>
        )
    }
}

export default VideoIndex;