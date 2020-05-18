import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import VideoSideIndexContainer from './video_side_index_container';
import CommentIndexContainer from '../../comments/comment_index_container';
import SubscribeButton from '../../subscriptions/subscribe_button';
// import LikeCounter from '../../likes/like_counter';

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
                            {/* <LikeCounter likes={video.likes}
                            dislikes={video.dislikes}
                            currentUser={currentUser}
                            likeableType='Video'
                            likeableId={video.id} /> */}
                        </section>
                    </div>
                    <div className='show-details-bottom-container flex'>
                        <div className='bottom-details-left'>
                            <div className='top-row flex'>
                                <Link to={`/users/${video.uploader.id}`}>
                                    <FontAwesomeIcon icon={faUserCircle} />
                                </Link>
                                <div className='uploader-info'>
                                    <Link to={`/users/${video.uploader.id}`}>
                                        <h4>{video.uploader.username}</h4>
                                    </Link>
                                    <p>{video.subscriberCount}</p>
                                </div>
                            </div>
                            <span className='video-description'>{video.description}</span>
                        </div>
                        <SubscribeButton channelId={video.uploader.id} />
                    </div>
                    <CommentIndexContainer key={video.id} 
                    currentVideoId={this.props.match.params.videoId} />
                </section>
                <section className='show-video-list'>
                    <VideoSideIndexContainer currentVideoId={this.props.match.params.videoId} />
                </section>
            </div>
        )
    }
}

export default VideoShow;