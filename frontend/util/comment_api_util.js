export const fetchComments = videoId => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${videoId}/comments`
    })
);

export const fetchComment = (commentId) => (
    $.ajax({
        method: 'GET',
        url: `api/comments/${commentId}`
    })
);

export const createComment = (comment) => (
    $.ajax({
        method: 'POST',
        url: `api/videos/${comment.commentable_id}/comments`,
        data: { comment }
    })
);

// export const createComment = (comment) => {
//     debugger
//     return $.ajax({
//         method: 'POST',
//         url: `api/videos/${data.commentable_id}/comments`,
//         data: { comment }
//     })
// };

export const updateComment = (comment) => (
    $.ajax({
        method: 'PATCH',
        url: `api/comments/${comment.id}`,
        data: { comment }
    })
);

export const deleteComment = (commentId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${commentId}`,
    })
);