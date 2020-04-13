import React from 'react';
import VideoSideIndexItem from './video_side_index_item';

class VideoSideIndex extends React.Component {
    componentDidMount() {
        this.props.requestVideos();
    }

    componentDidUpdate() {
        this.props.requestVideos();
    }

    render() {
        const { videos, currentVideoId } = this.props;
        delete videos[currentVideoId];
        const videoRenders = Object.values(videos).map( video => (
            <VideoSideIndexItem video={video} />
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