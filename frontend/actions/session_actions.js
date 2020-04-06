import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const login = currentUser => dispatch =>
    SessionAPIUtil.login(currentUser).then(user => dispatch(receiveCurrentUser(user)));

export const signup = newUser => dispatch =>
    SessionAPIUtil.signup(newUser).then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch =>
    SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()));