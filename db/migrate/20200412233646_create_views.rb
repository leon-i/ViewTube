class CreateViews < ActiveRecord::Migration[5.2]
  def change
    create_table :views do |t|
      t.integer :viewer_id
      t.integer :video_id

      t.timestamps
    end

    add_index :views, :viewer_id
    add_index :views, :video_id
  end
end
