import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_REPLY = 'RECEIVE_REPLY';
export const REMOVE_COMMENT = 'DELETE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const receiveReply = comment => ({
    type: RECEIVE_REPLY,
    comment
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const clearCommentErrors = () => ({
    type: CLEAR_COMMENT_ERRORS
});

export const requestComments = videoId => dispatch =>
    CommentAPIUtil.fetchComments(videoId).then(comments => dispatch(receiveComments(comments)));

export const requestComment = commentId => dispatch =>
    CommentAPIUtil.fetchComment(commentId).then(comment => dispatch(receiveComment(comment)));

export const createComment = newComment => dispatch =>
    CommentAPIUtil.createComment(newComment).then(comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveCommentErrors(errors.responseJSON)));

export const createReply = newReply => dispatch =>
    CommentAPIUtil.createComment(newReply).then(reply => dispatch(receiveReply(reply)),
        errors => dispatch(receiveCommentErrors(errors.responseJSON)));

export const updateComment = (updatedComment) => dispatch =>
    CommentAPIUtil.updateComment(updatedComment).then(comment => dispatch(receiveComment(comment)),
        errors => dispatch(receiveCommentErrors(errors.responseJSON)));

export const deleteComment = (commentId) => dispatch =>
    CommentAPIUtil.deleteComment(commentId).then(comment => dispatch(removeComment(comment.id)),
        errors => dispatch(receiveCommentErrors(errors.responseJSON)));