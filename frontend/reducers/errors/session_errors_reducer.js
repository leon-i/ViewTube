import { RECEIVE_USER, RECEIVE_ERRORS } from '../../actions/session_actions';

export default (state=[], action) => {
    switch(action.type) {
        case RECEIVE_USER:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return state;
    }
}