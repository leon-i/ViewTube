json.extract! video, :id, :uploader_id, :title, :description
json.uploader video.uploader
json.views video.views.length
json.shorthandViews video.format_views
json.likes Like.only_likes('Video', video.id) do |like|
    json.partial! '/api/likes/like', like: like
end
json.dislikes Like.only_dislikes('Video', video.id) do |like|
    json.partial! '/api/likes/like', like: like
end
json.uploadDate video.created_at.strftime('%b, %d %Y')
json.timeSinceUpload video.time_since_upload
json.videoUrl url_for(video.video)
json.thumbnailUrl url_for(video.thumbnail)