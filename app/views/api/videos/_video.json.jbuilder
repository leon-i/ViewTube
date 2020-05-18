json.extract! video, :id, :uploader_id, :title, :description
json.uploader video.uploader
json.subscriberCount video.uploader.format_subscriber_count
json.views video.views.length
json.shorthandViews video.format_views
json.uploadDate video.created_at.strftime('%b, %d %Y')
json.timeSinceUpload video.time_since_upload
json.videoUrl url_for(video.video)
json.thumbnailUrl url_for(video.thumbnail)