import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'DELETE_LIKE';

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
});

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});

export const createLike = newLike = dispatch =>
    LikeAPIUtil.createLike(newLike).then(like => dispatch(receiveLike))

export const deleteLike = likeId => dispatch =>
    LikeAPIUtil.deleteLike(likeId).then(like => dispatch(removeLike))