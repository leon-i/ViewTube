# == Schema Information
#
# Table name: subscriptions
#
#  id            :bigint           not null, primary key
#  subscriber_id :integer          not null
#  channel_id    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Subscription < ApplicationRecord
    belongs_to :subscriber,
        foreign_key: :subscriber_id,
        class_name: :User
    
    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: :User
end
