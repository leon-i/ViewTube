json.partial! '/api/users/user', user: @user
json.videos @user.videos do |video|
    json.partial! '/api/videos/video'
end