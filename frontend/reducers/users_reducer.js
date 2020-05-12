import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER_PROFILE:
            const { id, username, email, first_name, last_name } = action.user;
            return Object.assign({}, state, { [id]: { id, username, email, first_name, last_name }});
        default:
            return state;
    }
}