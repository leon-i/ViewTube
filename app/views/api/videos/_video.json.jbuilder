json.extract! video, :id, :uploader_id, :title, :description
json.uploader video.uploader
json.views video.views.length
json.shorthandViews video.format_views
json.timeSinceUpload video.time_since_upload
json.videoUrl url_for(video.video)
json.thumbnailUrl url_for(video.thumbnail)