import React from 'react';
// import HeaderContainer from '../../header/header_container';

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
                        <video src={video.videoUrl}></video>
                    </div>
                </section>
                <section className='show-video-list'>
                </section>
            </div>
        )
    }
}

export default VideoShow;