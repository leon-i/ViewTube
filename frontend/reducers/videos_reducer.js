import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../actions/video_actions';

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
        default:
            return state;
    }
}