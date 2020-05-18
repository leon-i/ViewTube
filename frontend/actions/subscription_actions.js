import * as SubscriptionAPIUtil from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';
export const REMOVE_SUBSCRIPTION = 'REMOVE_SUBSCRIPTION';

const receiveSubscription = subscription => ({
    type: RECEIVE_SUBSCRIPTION,
    subscription
});

const removeSubscription = subscription => ({
    type: REMOVE_SUBSCRIPTION,
    subscription
});

export const createSubscription = newSub => dispatch =>
    SubscriptionAPIUtil.createSubscription(newSub).then(subscription => dispatch(receiveSubscription(subscription)));

export const deleteSubscription = sub => dispatch =>
    SubscriptionAPIUtil.deleteSubscription(sub).then(subscription => dispatch(removeSubscription(subscription)));
