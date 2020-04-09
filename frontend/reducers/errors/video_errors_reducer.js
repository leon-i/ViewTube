import { RECEIVE_VIDEO, RECEIVE_VIDEO_ERRORS, CLEAR_VIDEO_ERRORS } from '../../actions/video_actions';

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_VIDEO:
            return [];
        case CLEAR_VIDEO_ERRORS:
            return [];
        case RECEIVE_VIDEO_ERRORS:
            return action.errors;
        default:
            return state;
    }
}