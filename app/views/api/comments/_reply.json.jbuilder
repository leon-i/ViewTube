json.extract! reply, :id, :author_id, :commentable_type, :commentable_id, :body
json.author reply.author
json.likes Like.only_likes('Comment', reply.id) do |like|
    json.partial! '/api/likes/like', like: like
end
json.parentCommentAuthor reply.parent_comment_author
json.timeSinceCommented reply.time_since_commented