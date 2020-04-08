class Investor < ApplicationRecord
  validates :firstName, presence: true
  validates :lastName, presence: true
  validates :dateOfBirth, presence: true
  validates :phoneNumber, presence: true
  validates :streetAddress, presence: true
  validates :state, presence: true
  validates :zipCode, presence: true
end
