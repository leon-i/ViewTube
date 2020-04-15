# == Schema Information
#
# Table name: comments
#
#  id               :bigint           not null, primary key
#  author_id        :integer          not null
#  commentable_type :string           not null
#  commentable_id   :bigint           not null
#  body             :text             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Comment < ApplicationRecord
    validates :author_id, :commentable_type, :commentable_id, :body, presence: true

    belongs_to :commentable, polymorphic: true
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :comments, as: :commentable

    def time_since_commented
        time_difference = Time.now - Time.parse(self.created_at.to_s)
        years_since = (time_difference / 1.year).to_i
        months_since = (time_difference / 1.month).to_i
        days_since = (time_difference / 1.day).to_i
        hours_since = (time_difference / 1.hour).to_i
        minutes_since = (time_difference / 1.minute).to_i

        if years_since >= 1
            years_since === 1 ? "1 year ago" : "#{years_since} years ago"
        elsif months_since >= 1
            months_since === 1 ? "1 month ago" : "#{months_since} months ago"
        elsif days_since >= 1
            days_since === 1 ? "1 day ago" : "#{days_since} days ago"
        elsif hours_since >= 1
            hours_since === 1 ? "1 hour ago" : "#{hours_since} hours ago"
        elsif minutes_since >= 1
            minutes_since === 1 ? "1 minute ago" : "#{minutes_since} minutes ago"
        else
            'Just now'
        end
    end

    def parent_comment_author
        Comment.find(self.commentable_id).author
    end

    def total_comments_on_video
        video = Video.find(self.commentable_id)
        video.total_comments
    end
end
