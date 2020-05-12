import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO, CLEAR_VIDEOS } from '../actions/video_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';

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
        case RECEIVE_USER_PROFILE:
            const userVideos = {};
            action.user.videos.forEach(video => userVideos[video.id] = video);
            return Object.assign({}, userVideos);
        default:
            return state;
    }
}