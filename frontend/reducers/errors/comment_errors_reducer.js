import { RECEIVE_COMMENT, RECEIVE_COMMENT_ERRORS, CLEAR_COMMENT_ERRORS } from '../../actions/comment_actions';

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_COMMENT:
            return [];
        case CLEAR_COMMENT_ERRORS:
            return [];
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        default:
            return state;
    }
}