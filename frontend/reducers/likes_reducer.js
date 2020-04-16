// import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/comment_actions';

// export default (state = {}, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_LIKE:
//             const entity = action.likeable_type = 'Video' ? 'videos' : 'comments';
//             const likedEntity = Object.assign({}, state.entities)
//             return Object.assign({}, state, { [action.comment.id]: action.comment });
//         case RECEIVE_REPLY:
//             const parentComment = Object.assign({}, state[action.comment.commentable_id]);
//             parentComment.replies.push(action.comment);
//             return Object.assign({}, state, { [parentComment.id]: parentComment });
//         case REMOVE_COMMENT:
//             const newState = Object.assign({}, state);
//             delete newState[action.commentId];
//             return newState;
//         default:
//             return state;
//     }
// }