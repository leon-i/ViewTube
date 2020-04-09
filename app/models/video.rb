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
    
    def self.format_for_index
        # first_eight = Video.order()
    end
end
