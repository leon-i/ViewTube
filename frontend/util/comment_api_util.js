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

export const createComment = (videoId, comment) => (
    $.ajax({
        method: 'POST',
        url: `api/videos/${videoId}/comments`,
        data: { comment }
    })
);

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