export const createVideoLike = like => (
    $.ajax({
        method: 'POST',
        url: 'api/videos/likes',
        data: { like }
    })
);

export const createCommentLike = like => (
    $.ajax({
        method: 'POST',
        url: 'api/comments/likes',
        data: { like }
    })
);

export const deleteVideoLike = likeId => (
    $.ajax({
        method: 'DELETE',
        url: `api/videos/likes/${likeId}`,
    })
)

export const deleteCommentLike = likeId => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/likes/${likeId}`,
    })
)