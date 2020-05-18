import React from 'react';
import { Link } from 'react-router-dom';
import { createView } from '../../util/video_api_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import SideNav from '../sidenav/sidenav';
import SubscribeButton from '../subscriptions/subscribe_button';

class UserChannel extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { userProfileId, requestUser, clearVideos, closeModal } = this.props
        closeModal();
        clearVideos();
        requestUser(userProfileId);
    }

    handleVideoClick(video) {
        return (e) => {
            const { currentUser } = this.props;
            const viewer_id = currentUser ? currentUser.id : null;
            createView({ video_id: video.id, viewer_id: viewer_id });
        }
    }

    render() {
        const { userProfile, videos, sideNav } = this.props;
        if (!userProfile) return null;
        const profileSectionClass = sideNav ? 'user-profile-content partial-width' : 'user-profile-content full-width';
        const videoRenders = Object.values(videos).map((video, idx) => (
            <div key={idx} className='profile-video-container' onClick={this.handleVideoClick(video)}>
                <Link to={`/videos/${video.id}`}>
                    <div className='video-index-thumbnail'>
                        <img src={video.thumbnailUrl} alt="video-thumbnail" />
                    </div>
                <div className='video-details flex'>
                    <div className='profile-detail-text flex'>
                        <h4>{video.title}</h4>
                        <p>{`${video.shorthandViews} • ${video.timeSinceUpload}`}</p>
                    </div>
                </div>
                </Link>
            </div>
        ));

        return (
            <>
                <SideNav />
                <section className={profileSectionClass}>
                    <header className='user-profile-header flex'>
                        <section className='upper-profile-header flex'>
                            <div className='upper-profile-header-left flex'>
                                <FontAwesomeIcon icon={faUserCircle} />
                                <div className='user-profile-details'>
                                    <h1>{userProfile.username}</h1>
                                    <p>{userProfile.subscriberCount}</p>
                                </div>
                            </div>
                            <div className='upper-profile-header-right flex'>
                                <SubscribeButton channelId={userProfile.id} />
                            </div>
                        </section>
                        <nav className='profile-nav'>
                            <h2>VIDEOS</h2>
                        </nav>
                    </header>
                    <div className='user-profile-video-index'>
                        <header className='user-profile-video-index-header flex'>
                            <h2>Uploads</h2>
                        </header>
                        <section className='uploads-container flex'>
                            {videoRenders}
                        </section>
                    </div>
                </section>
            </>
        )
    }
}

export default UserChannel;