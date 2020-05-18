import React from 'react';

const SubscribedVideoSection = ({ videos, header }) => {
    if (!videos.length) return null;
    return (
        <section className='subscribed-video-section'>
            <h2>{header}</h2>
            <section className='subscribed-video-section-index flex'>
                { videos }
            </section>
        </section>
    )
};

export default SubscribedVideoSection;