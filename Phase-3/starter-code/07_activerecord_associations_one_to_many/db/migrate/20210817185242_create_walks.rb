class CreateWalks < ActiveRecord::Migration[5.2]
  def change
    create_table :walks do |t|
      t.datetime :time
      t.integer :dog_id
      t.boolean :pooped
    end 
  end
end
