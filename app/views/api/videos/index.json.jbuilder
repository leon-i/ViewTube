@videos.each do |video|
    json.set! video.id do
        json.partial! '/api/videos/video', video: video
        json.videoUrl url_for(video.video)
        json.thumbnailUrl url_for(video.thumbnail)
        json.uploader video.uploader
    end
end