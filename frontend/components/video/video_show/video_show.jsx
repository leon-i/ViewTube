import React from 'react';
import { Link } from 'react-router-dom';
import { createView } from '../../../util/video_api_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { requestVideo, match } = this.props;
        requestVideo(match.params.videoId);
    }

    render() {
        const { video } = this.props;
        if (!video) return null;

        return (
            <div className='video-show flex'>
                <section className='show-main'>
                    <div className='video-player-container'>
                        <video src={video.videoUrl} controls={true}></video>
                    </div>
                    <div className='show-details-top-container flex'>
                        <section className='show-details-left'>
                            <h2>{video.title}</h2>
                            <p>{`${video.views} views • ${video.uploadDate}`}</p>
                        </section>
                        <section className='show-details-right'>
                            <p>Likes placeholder</p>
                        </section>
                    </div>
                    <div className='show-details-bottom-container flex'>
                        <div className='bottom-details-left'>
                            <div className='top-row flex'>
                                <FontAwesomeIcon icon={faUserCircle} />
                                <div className='uploader-info'>
                                    <h4>{video.uploader.username}</h4>
                                    <p>Subscriber placeholder</p>
                                </div>
                            </div>
                            <span className='video-description'>{video.description}</span>
                        </div>
                    </div>
                </section>
                <section className='show-video-list'>
                </section>
            </div>
        )
    }
}

export default VideoShow;