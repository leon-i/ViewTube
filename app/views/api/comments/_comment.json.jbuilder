json.extract! comment, :id, :author_id, :commentable_type, :commentable_id, :body
json.replies comment.replies
json.timeSinceCommented comment.time_since_commented