# == Schema Information
#
# Table name: views
#
#  id         :bigint           not null, primary key
#  viewer_id  :integer
#  video_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class View < ApplicationRecord
    belongs_to :viewer,
        foreign_key: :viewer_id,
        class_name: :User,
        optional: true
    
    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video
end
