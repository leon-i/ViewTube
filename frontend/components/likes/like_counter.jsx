import React from 'react';
import * as LikeAPIUtil from '../../util/like_api_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class LikeCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allLikes: Object.assign({}, this.props.likes, this.props.dislikes),
            likes: Object.assign({}, this.props.likes),
            dislikes: Object.assign({}, this.props.dislikes)
        }
        
        this.decrimentLikes = this.decrimentLikes.bind(this);
        this.incrimentLikes = this.incrimentLikes.bind(this);
        this.decrimentLikes = this.decrimentLikes.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    // getLikerIds() {
    //     const { likes } = this.props;
    //     const likerIds = likes.map(like => like.liker_id);
    //     return likerIds;
    // }

    // getDislikerIds() {
    //     const { dislikes } = this.props;
    //     const dislikerIds = dislikes.map(like => like.liker_id);
    //     return dislikerIds;
    // }

    decrimentLikes(id) {
        const { allLikes, likes, dislikes } = this.state;
        const newAllLikes = Object.assign({}, allLikes);
        delete newAllLikes[id];

        const newLikes = Object.assign({}, likes);
        delete newLikes[id];

        const newDislikes = Object.assign({}, dislikes);
        delete newDislikes[id];

        this.setState({
            allLikes: newAllLikes,
            likes: newLikes,
            dislikes: newDislikes
        })
    }

    incrimentLikes(like, id) {
        const { allLikes, likes} = this.state;
        this.setState({
            allLikes: Object.assign({}, allLikes, { [id]: like }),
            likes: Object.assign({}, likes, { [id]: like })
        });
    }

    incrimentDislikes(dislike, id) {
        const { allLikes, dislikes } = this.state;
        this.setState({
            allLikes: Object.assign({}, allLikes, { [id]: dislike }),
            likes: Object.assign({}, dislikes, { [id]: dislike })
        });
    }

    handleLike(likeType) {
        return (e) => {
            const { allLikes } = this.state;
            const { currentUser, likeableType, likeableId } = this.props;

            if (allLikes[currentUser.id]) {
                const like = allLikes[currentUser.id];
                debugger
                LikeAPIUtil.deleteLike(like.id);
                this.decrimentLikes(currentUser.id);
            }

            const dislike = likeType === 'dislike' ? true : false;
            const newLike = Object.assign({}, {
                liker_id: currentUser.id,
                likeable_type: likeableType,
                likeable_id: likeableId,
                dislike: dislike
            });

            LikeAPIUtil.createLike(newLike);

            dislike ? (
                this.incrimentLikes(newLike, currentUser.id)
            ) : (
                this.incrimentDislikes(newLike, currentUser.id)
            );
        } 
    }

    handleUnLike(like) {
        return (e) => {
            LikeAPIUtil.deleteLike(like.id);
        }
    }

    render() {
        const { likes, dislikes } = this.state;
        const { currentUser, likeableType } = this.props;

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