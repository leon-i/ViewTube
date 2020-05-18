import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION } from '../actions/subscription_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            const user = action.user;
            const userSubscriptions = {};
            user.subscriptions.forEach(sub => userSubscriptions[sub.channel_id] = sub);
            return Object.assign({}, userSubscriptions);
        case RECEIVE_SUBSCRIPTION:
            return Object.assign({}, state, { [action.subscription.channel_id]: action.subscription });
        case REMOVE_SUBSCRIPTION:
            const newState = Object.assign({}, state);
            delete newState[action.subscription.channel_id];
            return newState;
        default:
            return state;
    }
}