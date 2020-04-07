import { RECEIVE_USER, RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from '../../actions/session_actions';

export default (state=[], action) => {
    switch(action.type) {
        case RECEIVE_USER:
            return [];
        case CLEAR_SESSION_ERRORS:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        default:
            return state;
    }
}