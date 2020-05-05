json.extract! comment, :id, :author_id, :commentable_type, :commentable_id, :body
json.author comment.author
json.replies comment.comments do |reply|
    json.partial! '/api/comments/reply', reply: reply
end
json.replyCount comment.comments.length
json.timeSinceCommented comment.time_since_commented