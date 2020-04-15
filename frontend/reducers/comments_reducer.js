import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            debugger
            return action.comments
        case RECEIVE_COMMENT:
            debugger
            return Object.assign({}, state, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT:
            const newState = Object.assign({}, state);
            delete newState[action.commentId];
            return newState;
        default:
            return state;
    }
}