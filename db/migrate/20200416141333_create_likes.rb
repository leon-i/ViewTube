class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.references :likeable, polymorphic: true, null: false
      t.boolean :dislike, default: false

      t.timestamps
    end

    add_index :likes, :liker_id
  end
end
