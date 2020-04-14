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
require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
