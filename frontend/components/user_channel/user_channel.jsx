import React from 'react';
import { Link } from 'react-router-dom';
import { createView } from '../../util/video_api_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import SideNav from '../sidenav/sidenav';

class UserChannel extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.requestVideos();
    }

    handleVideoClick(video) {
        return (e) => {
            const viewer_id = currentUser ? currentUser.id : null;
            createView({ video_id: video.id, viewer_id: viewer_id });
        }
    }

    render() {
        const { userProfileId, videos } = this.props;
        const videoArr = Object.values(videos);
        const profileVideos = videoArr.filter(video => video.uploader_id === parseInt(userProfileId));
        if (!profileVideos.length) return null;
        const uploader = profileVideos.length ? profileVideos[0].uploader : '';
        const videoRenders = profileVideos.map((video, idx) => (
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
                <section className='user-profile-content'>
                    <header className='user-profile-header flex'>
                        <section className='upper-profile-header flex'>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <div className='user-profile-details'>
                                <h1>{uploader.username}</h1>
                                <p>22 subscribers</p>
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