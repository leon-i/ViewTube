import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION } from '../actions/subscription_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER_PROFILE:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_SUBSCRIPTION:
            const user = Object.assign({}, state[action.subscription.subscriber_id]);
            user.subscriptions[action.subscription.channel_id] = action.subscription;
            return Object.assign({}, state, { [user.id]: user});
        case REMOVE_SUBSCRIPTION:
            const newState = Object.assign({}, state[action.subscription.subscriber_id]);
            delete newState.subscriptions[action.subscription.channel_id];
            return Object.assign({}, state, { [newState.id]: newState });
        default:
            return state;
    }
}