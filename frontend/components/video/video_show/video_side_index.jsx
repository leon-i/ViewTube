import React from 'react';
import VideoSideIndexItem from './video_side_index_item';
import { createView } from '../../../util/video_api_util';

class VideoSideIndex extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.requestVideos();
    }

    handleClick(video) {
        return (e) => {
            const { currentUser } = this.props;
            const viewer_id = currentUser ? currentUser.id : null;
            createView({ video_id: video.id, viewer_id: viewer_id });
        }
    }

    render() {
        const { videos, currentVideoId } = this.props;
        const sideVideos = Object.assign({}, videos);
        delete sideVideos[currentVideoId];
        const videoRenders = Object.values(sideVideos).map((video, idx) => (
            <VideoSideIndexItem key={idx} video={video} handleClick={this.handleClick} />
        ))
        return (
            <>
                <section className='side-index-header flex'>
                    <h2>Up next</h2>
                    <p>Autoplay placeholder</p>
                </section>
                {videoRenders}
            </>
        )
    }
}

export default VideoSideIndex;