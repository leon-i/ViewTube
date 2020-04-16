# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  liker_id      :integer          not null
#  likeable_type :string           not null
#  likeable_id   :bigint           not null
#  dislike       :boolean          default(FALSE)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord   
    validates :liker_id, :likeable_type, :likeable_id, presence: true
    validates :dislike, inclusion: { in: [true, false] }

    belongs_to :likeable, polymorphic: true

    def self.only_likes(type, id)
        Like.where(likeable_type: type)
            .where(likeable_id: id)
            .where(dislike: false)
    end

    def self.only_dislikes(type, id)
        Like.where(likeable_type: type)
            .where(likeable_id: id)
            .where(dislike: true)
    end
end
