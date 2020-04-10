@videos.each do |video|
    json.set! video.id do
        json.partial! '/api/videos/video', video: video
        json.videoUrl url_for(video.video)
        json.uploader video.uploader
    end
end