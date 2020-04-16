import React from 'react';
import * as LikeAPIUtil from '../../util/like_api_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class LikeCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount: this.props.likes.length,
            dislikeCount: this.props.dislikes.length,
            likerIds: this.getLikerIds(),
            dislikerIds: this.getDislikerIds()
        }

        this.handleLike = this.handleLike.bind(this);
    }

    getLikerIds() {
        const { likes } = this.props;
        const likerIds = likes.map(like => like.liker_id);
        return likerIds;
    }

    getDislikerIds() {
        const { dislikes } = this.props;
        const dislikerIds = dislikes.map(like => like.liker_id);
        return dislikerIds;
    }

    handleLike(likeType) {
        return (e) => {
            // debugger
            const { likerIds, dislikerIds } = this.state;
            const { currentUser, likeableType, likeableId } = this.props;

            if (likerIds.includes(currentUser.id) || dislikerIds.includes(currentUser.id)) {
                LikeAPIUtil.deleteLike(currentUser.id);
            }

            const dislike = likeType === 'dislike' ? true : false;
            const newLike = Object.assign({}, {
                liker_id: currentUser.id,
                likeable_type: likeableType,
                likeable_id: likeableId,
                dislike: dislike
            });
            // debugger

            LikeAPIUtil.createLike(newLike);
            dislike ? (
                this.setState({ dislikerIds: this.state.dislikerIds.concat([currentUser.id]) })
            ) : (
                this.setState({ likerIds: this.state.dislikerIds.concat([currentUser.id]) })
            );
        } 
    }

    handleUnLike(like) {
        return (e) => {
            LikeAPIUtil.deleteLike(like.id);
        }
    }

    render() {
        const { likerIds, dislikerIds } = this.state;
        const { currentUser, likeableType } = this.props;

        let likeClass;
        let dislikeClass;

        if (likerIds.includes(currentUser.id)) {
            likeClass = 'like-icon liked';
            dislikeClass = 'dislike-icon';
        } else if (dislikerIds.includes(currentUser.id)) {
            likeClass = 'like-icon';
            dislikeClass = 'dislike-icon disliked';
        } else {
            likeClass = 'like-icon';
            dislikeClass = 'dislike-icon';
        }

        const dislikesRender = likeableType === 'Video' ? (
            <>
                <FontAwesomeIcon onClick={this.handleLike('dislike')} className={dislikeClass} icon={faThumbsDown} />
                <p>{dislikerIds.length}</p>
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
                    <p>{likerIds.length}</p>
                </section>
                <section className='dislikes flex'>
                    { dislikesRender }
                </section>
            </div>
        )
    }
}

export default LikeCounter;