import React from 'react';
import VideoSideIndexItem from './video_side_index_item';

class VideoSideIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestVideos();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentVideoId !== this.props.currentVideoId) this.props.requestVideos();
    }

    render() {
        const { videos, currentVideoId } = this.props;
        delete videos[currentVideoId];
        const videoRenders = Object.values(videos).map((video, idx) => (
            <VideoSideIndexItem key={idx} video={video} />
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

// const VideoSideIndex = ({ videos, currentVideoId, currentUser }) => {
//     delete videos[currentVideoId];
//     const videoRenders = Object.values(videos).map((video, idx) => (
//         <VideoSideIndexItem key={idx} video={video} />
//     ))
//     return (
//             <>
//                 <section className='side-index-header flex'>
//                     <h2>Up next</h2>
//                     <p>Autoplay placeholder</p>
//                 </section>
//                 {videoRenders}
//             </>
//     )
// }

export default VideoSideIndex;