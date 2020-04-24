import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO, CLEAR_VIDEOS } from '../actions/video_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return action.videos
        case RECEIVE_VIDEO:
            return Object.assign({}, state, { [action.video.id]: action.video });
        case REMOVE_VIDEO:
            const newState = Object.assign({}, state);
            delete newState[action.videoId];
            return newState;
        case CLEAR_VIDEOS:
            return {};
        default:
            return state;
    }
}