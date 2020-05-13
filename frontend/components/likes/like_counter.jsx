import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const LikeCounter = ({ currentUser, likes, dislikes, likeableType, likeableId, handleLike }) => {
    let likeClass;
    let dislikeClass;
    let existingLike = null;
    const likeObj = {};
    const dislikeObj = {};
    likes.forEach(like => likeObj[like.liker_id] = true);
    dislikes.forEach(like => dislikeObj[like.liker_id] = true);

    if (likeObj[currentUser.id]) {
        likeClass = 'like-icon liked';
        dislikeClass = 'dislike-icon';
        existingLike = likes.filter(like => like.liker_id = currentUser.id)[0];
    } else if (dislikeObj[currentUser.id]) {
        likeClass = 'like-icon';
        dislikeClass = 'dislike-icon disliked';
        existingLike = dislikes.filter(dislike => dislike.liker_id = currentUser.id)[0];
    } else {
        likeClass = 'like-icon';
        dislikeClass = 'dislike-icon';
    }

    const dislikesRender = likeableType === 'Video' ? (
        <>
            <FontAwesomeIcon onClick={handleLike('dislike', existingLike)} className={dislikeClass} icon={faThumbsDown} />
            <p>{dislikes.length}</p>
        </>
    ) : (
            <>
                <FontAwesomeIcon className={dislikeClass} icon={faThumbsDown} />
            </>
        );

    return (
        <div className='likes-container flex'>
            <section className='likes flex'>
                <FontAwesomeIcon onClick={handleLike('like', existingLike)} className={likeClass} icon={faThumbsUp} />
                <p>{likes.length}</p>
            </section>
            <section className='dislikes flex'>
                {dislikesRender}
            </section>
        </div>
    )
}

// class LikeCounter extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     handleLike(type) {

//     }

//     render() {
//         const { likes, dislikes, currentUser, likeableType } = this.props;
//         const likesAuthorObj = {};

//         let likeClass;
//         let dislikeClass;

//         if (likes[currentUser.id]) {
//             likeClass = 'like-icon liked';
//             dislikeClass = 'dislike-icon';
//         } else if (dislikes[currentUser.id]) {
//             likeClass = 'like-icon';
//             dislikeClass = 'dislike-icon disliked';
//         } else {
//             likeClass = 'like-icon';
//             dislikeClass = 'dislike-icon';
//         }

//         const dislikesRender = likeableType === 'Video' ? (
//             <>
//                 <FontAwesomeIcon onClick={this.handleLike('dislike')} className={dislikeClass} icon={faThumbsDown} />
//                 <p>{Object.keys(dislikes).length}</p>
//             </>
//         ) : (
//             <>
//                 <FontAwesomeIcon className={dislikeClass} icon={faThumbsDown} />
//             </>
//         );

//         return (
//             <div className='likes-container flex'>
//                 <section className='likes flex'>
//                     <FontAwesomeIcon onClick={this.handleLike('like')} className={likeClass} icon={faThumbsUp} />
//                     <p>{Object.keys(likes).length}</p>
//                 </section>
//                 <section className='dislikes flex'>
//                     { dislikesRender }
//                 </section>
//             </div>
//         )
//     }
// }

export default LikeCounter;