import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO, CLEAR_VIDEOS } from '../actions/video_actions';
import { RECEIVE_VIDEO_LIKE, REMOVE_VIDEO_LIKE } from '../actions/like_actions';
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
        case RECEIVE_VIDEO_LIKE:
            const parentVideo = Object.assign({}, state[action.like.likeable_id]);
            parentVideo.likes.push(action.like);
            return Object.assign({}, state, { [parentVideo.id]: parentVideo });
        case REMOVE_VIDEO_LIKE:
            const likedVideo = Object.assign({}, state[action.like.likeable_id]);
            likedVideo.likes = likedVideo.likes.filter(like => like.id !== action.like.id);
            likedVideo.dislikes = likedVideo.dislikes.filter(dislike => dislike.id !== action.like.id);
            return Object.assign({}, state, { [likedVideo.id]: likedVideo });
        case RECEIVE_USER_PROFILE:
            const userVideos = {};
            action.user.videos.forEach(video => userVideos[video.id] = video);
            return Object.assign({}, userVideos);
        default:
            return state;
    }
}