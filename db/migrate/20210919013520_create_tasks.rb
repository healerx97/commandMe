class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.datetime :due_date
      t.string :title
      t.boolean :accepted
      t.boolean :reviewed
      t.integer :commander_id, foreign_key: true
      t.integer :receiver_id, foreign_key: true
      t.timestamps
    end
  end
end
