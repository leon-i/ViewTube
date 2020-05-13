json.extract! video, :id, :uploader_id, :title, :description
json.uploader video.uploader
json.views video.views.length
json.shorthandViews video.format_views
json.uploadDate video.created_at.strftime('%b, %d %Y')
json.timeSinceUpload video.time_since_upload
json.likes Like.only_likes('video', video.id) do |like|
    json.partial! '/api/likes/like', like: like
end
json.dislikes Like.only_dislikes('video', video.id) do |dislike|
    json.partial! '/api/likes/like', like: dislike
end
json.videoUrl url_for(video.video)
json.thumbnailUrl url_for(video.thumbnail)