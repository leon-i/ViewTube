import React from 'react';

class VideoIndex extends React.Component {
    componentDidMount() {
        this.props.requestVideos();
    }

    render() {
        const videos = Object.values(this.props.videos);
        const videoRenders = videos.map(video => (
            <video src={video.videoUrl}></video>
        ))
        return (
            <div>
                { videoRenders }
            </div>
        )
    }
}

export default VideoIndex;