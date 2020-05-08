import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'DELETE_LIKE';

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});

export const createVideoLike = newLike = dispatch =>
    LikeAPIUtil.createVideoLike(newLike).then(like => dispatch(receiveLike(like)));

export const createCommentLike = newLike = dispatch =>
    LikeAPIUtil.createCommentLike(newLike).then(like => dispatch(receiveLike(like)));

export const deleteVideoLike = likeId => dispatch =>
    LikeAPIUtil.deleteVideoLike(likeId).then(like => dispatch(removeLike(like.id)));

export const deleteCommentLike = likeId => dispatch =>
    LikeAPIUtil.deleteCommentLike(likeId).then(like => dispatch(removeLike(like.id)));