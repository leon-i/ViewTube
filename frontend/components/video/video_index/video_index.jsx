import React from 'react';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.videos;
    }

    componentDidMount() {
        this.props.requestVideos();
    }

    render() {
        const videos = Object.values(this.props.videos);
        const videoRenders = videos.map(video => (
            <div className='video-container'>
                <div className='video-player'>
                    <video src={video.videoUrl}
                    controls={true}></video>
                </div>
                    <div className='video-details flex'>
                        <div className='detail-text flex'>
                            <h4>{video.title}</h4>
                            <p>{video.uploader.username}</p>
                            <p>View/date placeholder</p>
                        </div>
                    </div>
            </div>
        ))
        return (
            <div className='video-index-container flex'>
                <h1 className='row-title'>Recommended</h1>
                <section className='video-index flex'>
                            { videoRenders }
                </section>
            </div>
        )
    }
}

export default VideoIndex;