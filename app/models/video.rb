# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  uploader_id :integer          not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord
    validates :uploader_id, :title, presence: true

    belongs_to :uploader,
        foreign_key: :uploader_id,
        class_name: :User
    
    has_many :views,
        foreign_key: :video_id,
        class_name: :View
    
    has_many :comments, as: :commentable
    has_many :likes, as: :likeable
    
    has_one_attached :video
    has_one_attached :thumbnail
    
    def self.format_for_index
        first_eight = Video.joins(:views)
            .group('videos.id')
            .order('COUNT(views.id) DESC')
            .limit(8)
        rest = Video.joins(:views)
            .group('videos.id')
            .order('COUNT(views.id) DESC')
            .offset(8)
        
        first_eight.shuffle + rest.shuffle
    end

    def format_views
        views = self.views.length
        return '0 views' if views == 0
        
        digit_arr = views.to_s.split('');
        displayed_digits = handle_first_three_digits(digit_arr[0..2])

        if views > 1000000
            "#{displayed_digits}M views"
        elsif views > 100
            "#{displayed_digits}K views"
        elsif views === 1
            '1 view'
        else
            "#{displayed_digits} views"
        end
    end

    def time_since_upload
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

    def handle_first_three_digits(digit_arr)
        approved_numbers = []
        non_zero_found = false

        digit_arr.each do |num|
            if num.to_i != 0
                non_zero_found = true
                approved_numbers << num
            elsif non_zero_found
                approved_numbers << num
            end
        end

        approved_numbers.join('')
    end

    def total_comments
        comment_count = 0
        comment_count += self.comments.length
        self.comments.each { |comment| comment_count += comment.comments.length }
        comment_count
    end
end
