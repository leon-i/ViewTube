import React from 'react';

const SubscribedVideoSection = ({ videos, header }) => {
    if (!videos.length) return null;
    const videoRender = [...videos];
    let spacerKey = 0;
    while (videoRender.length % 5 !== 0) {
        videoRender.push(
            <div key={`spacer-${spacerKey}`} className='video-spacer subscribed-profile-video-container'></div>
        );
        spacerKey++;
    }
    return (
        <section className='subscribed-video-section'>
            <h2>{header}</h2>
            <section className='subscribed-video-section-index flex'>
                { videoRender }
            </section>
        </section>
    )
};

export default SubscribedVideoSection;