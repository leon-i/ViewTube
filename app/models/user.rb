# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :username, :session_token, presence: true, uniqueness: true
    validates :email, email: true
    validates :first_name, :last_name, :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    attr_reader :password
    after_initialize :ensure_session_token

    has_many :videos,
        foreign_key: :uploader_id,
        class_name: :Video
    
    has_many :authored_comments,
        foreign_key: :author_id,
        class_name: :Comment
    
    has_many :video_views,
        foreign_key: :viewer_id,
        class_name: :View
    
    has_many :viewed_videos,
        through: :video_views,
        source: :video
    
    has_many :subscriptions,
        foreign_key: :subscriber_id,
        class_name: :Subscription
    
    has_many :subscribers,
        foreign_key: :channel_id,
        class_name: :Subscription
    
    has_many :subscriptions_to_channels,
        through: :subscriptions,
        source: :channel
    
    has_many :subscribed_users,
        through: :subscribers,
        source: :subscriber
    
    has_many :subscribed_videos,
        through: :subscriptions_to_channels,
        source: :videos

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil;
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def format_subscriber_count
        subscribers = self.subscribers.length
        return '0 subscribers' if subscribers === 0
        
        digit_arr = subscribers.to_s.split('')
        displayed_digits = handle_first_three_digits(digit_arr[0..2])

        if subscribers >= 10000000
            displayed_digits = displayed_digits[2].to_i === 0 ? displayed_digits[0..1] : "#{displayed_digits[0..1]}.#{displayed_digits[2]}"
            "#{displayed_digits}M subscribers"
        elsif subscribers >= 1000000
            displayed_digits = displayed_digits[1].to_i === 0 ? displayed_digits[0] : "#{displayed_digits[0]}.#{displayed_digits[1]}"
            "#{displayed_digits}M subscribers"
        elsif subscribers >= 100000
            "#{displayed_digits}K subscribers"
        elsif subscribers >= 10000
            displayed_digits = displayed_digits[2].to_i === 0 ? displayed_digits[0..1] : "#{displayed_digits[0..1]}.#{displayed_digits[2]}"
            "#{displayed_digits}K subscribers"
        elsif subscribers >= 1000
            displayed_digits = displayed_digits[1].to_i === 0 ? displayed_digits[0] : "#{displayed_digits[0]}.#{displayed_digits[1]}"
            "#{displayed_digits}K subscribers"
        elsif subscribers > 1
            "#{subscribers} subscribers"
        elsif subscribers === 1
            '1 subscriber'
        else
            "#{displayed_digits} subscribers"
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
end
