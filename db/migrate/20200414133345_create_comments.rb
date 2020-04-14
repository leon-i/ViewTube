class CreateComments < ActiveRecord::Migration[5.2]
  def change
    drop_table :comments
    
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.references :commentable, polymorphic: true, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :comments, :author_id
  end
end
