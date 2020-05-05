import * as VideoAPIUtil from '../util/video_api_util';
import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'DELETE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
export const CLEAR_VIDEOS = 'CLEAR_VIDEOS';
export const CLEAR_VIDEO_ERRORS = 'CLEAR_VIDEO_ERRORS';

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
});

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

const removeVideo = videoId => ({
    type: REMOVE_VIDEO,
    videoId
});

const receiveVideoErrors = errors => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
});

export const clearVideoErrors = () => ({
    type: CLEAR_VIDEO_ERRORS
});

export const clearVideos = () => ({
    type: CLEAR_VIDEOS
});

export const requestVideos = data => dispatch =>
    VideoAPIUtil.fetchVideos(data).then(videos => dispatch(receiveVideos(videos)));

export const requestVideo = videoId => dispatch =>
    VideoAPIUtil.fetchVideo(videoId).then(video => dispatch(receiveVideo(video)));

export const createVideo = newVideo => dispatch =>
    VideoAPIUtil.createVideo(newVideo).then(video => dispatch(receiveVideo(video)),
    errors => dispatch(receiveVideoErrors(errors.responseJSON)));

export const updateVideo = updatedVideo => dispatch =>
    VideoAPIUtil.updateVideo(updatedVideo).then(video => dispatch(receiveVideo(video)),
    errors => dispatch(receiveVideoErrors(errors.responseJSON)));

export const deleteVideo = videoId => dispatch =>
    VideoAPIUtil.deleteVideo(videoId).then(video => dispatch(removeVideo(video.id)),
    errors => dispatch(receiveVideoErrors(errors.responseJSON)));

export const searchVideos = query => dispatch =>
    SearchAPIUtil.fetchSearchResults(query).then(videos => dispatch(receiveVideos(videos)));