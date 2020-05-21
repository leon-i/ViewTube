import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import SideNav from '../sidenav/sidenav';
import SubscribedVideoSection from './subscribed_video_section';
import SubscribedVideoIndexItem from './subscribed_video_index_item';

class SubscribedVideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { currentUser, clearVideos, requestSubscribedVideos } = this.props;
        clearVideos();
        if (currentUser) requestSubscribedVideos(currentUser.id);
    }

    render() {
        const { currentUser, videos, sideNav } = this.props;
        if (!videos) return null;
        const videoIndexWidth = sideNav ? 'subscribed-partial-width' : 'subscribed-full-width';
        if (!currentUser) return (
            <>
                <SideNav />
                <div className={`subscribed-video-index-container flex ${videoIndexWidth}`}>
                    <section className='subscribed-sign-in-message flex'>
                        <h1>Don’t miss new videos</h1>
                        <h2>Sign in to see updates from your favorite ViewTube channels</h2>
                        <Link to='/login'>
                            <div className='signin-btn flex'>
                                <FontAwesomeIcon icon={faUserCircle} className='small-icon' />
                                <p>SIGN IN</p>
                            </div>
                        </Link>
                    </section>
                </div>
            </>
        );

        if (!Object.values(currentUser.subscriptions).length) return (
            <>
                <SideNav />
                <div className={`subscribed-video-index-container flex ${videoIndexWidth}`}>
                    <div className='no-subscriptions-message flex'>
                        <h1>You have not subscribed to any channels</h1>
                        <h2>Subscribe to see updates from your favorite ViewTube channels</h2>
                        <Link to='/'>
                            <button>HOME</button>
                        </Link>
                    </div>
                </div>
            </>
        );

        const allVideos = Object.values(videos);

        const recentVideos = [];
        const thisWeekVideos = [];
        const thisMonthVideos = [];
        const olderVideos = [];

        allVideos.forEach((video, idx) => {
            const uploadTime = video.timeSinceUpload;
            if (uploadTime.includes('month') || uploadTime.includes('year')) {
                olderVideos.push(
                    <SubscribedVideoIndexItem key={idx} video={video} currentUserId={currentUser.id} />
                );
            } else if (uploadTime.includes('week')) {
                thisMonthVideos.push(
                    <SubscribedVideoIndexItem key={idx} video={video} currentUserId={currentUser.id} />
                );
            } else if (uploadTime.includes('days')) {
                thisWeekVideos.push(
                    <SubscribedVideoIndexItem key={idx} video={video} currentUserId={currentUser.id} />
                );
            } else {
                recentVideos.push(
                    <SubscribedVideoIndexItem key={idx} video={video} currentUserId={currentUser.id} />
                );
            }
        });

        const recent = <SubscribedVideoSection videos={recentVideos} header='Recent' />
        const thisWeek = <SubscribedVideoSection videos={thisWeekVideos} header='This week' />
        const thisMonth = <SubscribedVideoSection videos={thisMonthVideos} header='This month' />
        const older = <SubscribedVideoSection videos={olderVideos} header='Older' />

        return (
            <>
            <SideNav />
            <div className={`subscribed-video-index-container flex ${videoIndexWidth}`}>
                { recent }
                { thisWeek }
                { thisMonth }
                { older }
            </div>
            </>
        )
    }
}

export default SubscribedVideoIndex;