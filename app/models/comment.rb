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

    has_many :replies, as: :commentable
end
