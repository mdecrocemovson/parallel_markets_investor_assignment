class AddFileToInvestors < ActiveRecord::Migration[5.2]
  def change
    add_column :investors, :file, :string
  end
end
