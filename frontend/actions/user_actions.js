import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

const receiveUserProfile = user => ({
    type: RECEIVE_USER_PROFILE,
    user
})

export const requestUser = userId => dispatch =>
    UserAPIUtil.fetchUser(userId).then(user => dispatch(receiveUserProfile(user)));