import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class LikeCounter extends React.Component {
    constructor(props) {
        super(props);

        this.decrimentLikes = this.decrimentLikes.bind(this);
        this.incrimentLikes = this.incrimentLikes.bind(this);
        this.decrimentLikes = this.decrimentLikes.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    render() {
        const { likes, dislikes, currentUser, likeableType } = this.props;
        const likesAuthorObj = {};

        let likeClass;
        let dislikeClass;

        if (likes[currentUser.id]) {
            likeClass = 'like-icon liked';
            dislikeClass = 'dislike-icon';
        } else if (dislikes[currentUser.id]) {
            likeClass = 'like-icon';
            dislikeClass = 'dislike-icon disliked';
        } else {
            likeClass = 'like-icon';
            dislikeClass = 'dislike-icon';
        }

        const dislikesRender = likeableType === 'Video' ? (
            <>
                <FontAwesomeIcon onClick={this.handleLike('dislike')} className={dislikeClass} icon={faThumbsDown} />
                <p>{Object.keys(dislikes).length}</p>
            </>
        ) : (
            <>
                <FontAwesomeIcon className={dislikeClass} icon={faThumbsDown} />
            </>
        );

        return (
            <div className='likes-container flex'>
                <section className='likes flex'>
                    <FontAwesomeIcon onClick={this.handleLike('like')} className={likeClass} icon={faThumbsUp} />
                    <p>{Object.keys(likes).length}</p>
                </section>
                <section className='dislikes flex'>
                    { dislikesRender }
                </section>
            </div>
        )
    }
}

export default LikeCounter;