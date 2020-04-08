class Investor < ApplicationRecord
  mount_uploader :file, InvestorFileUploader
end
