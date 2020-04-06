import { RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, { [currentUserId]: action.user.id });
        case LOGOUT_USER:
            const newState = Object.assign({}, state);
            newState.currentUserId = null;
            return newState;
        default:
            return state;
    }
}