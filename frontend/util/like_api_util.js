export const createVideoLike = like => (
    $.ajax({
        method: 'POST',
        url: `api/videos/${like.likeable_id}/likes`,
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

export const deleteVideoLike = like => (
    $.ajax({
        method: 'DELETE',
        url: `api/videos/${like.likeable_id}/${like.id}`,
    })
)

export const deleteCommentLike = likeId => (
    $.ajax({
        method: 'DELETE',
        url: `api/comments/likes/${likeId}`,
    })
)