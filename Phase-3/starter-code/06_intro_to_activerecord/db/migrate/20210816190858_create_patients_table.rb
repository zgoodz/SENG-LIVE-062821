class CreatePatientsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |c|
      c.string :name
      c.datetime :last_visited_on
      c.date :birthday
      c.string :insurance_provider
      c.boolean :is_insured
      c.boolean :is_alive
      c.boolean :is_organ_donor
    end
  end
end
