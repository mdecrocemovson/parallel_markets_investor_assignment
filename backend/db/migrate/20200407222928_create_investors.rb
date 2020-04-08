class CreateInvestors < ActiveRecord::Migration[5.2]
  def change
    create_table :investors do |t|
      t.string :firstName
      t.string :lastName
      t.date :dateOfBirth
      t.string :phoneNumber
      t.string :streetAddress
      t.string :state
      t.string :zipCode

      t.timestamps
    end
  end
end
