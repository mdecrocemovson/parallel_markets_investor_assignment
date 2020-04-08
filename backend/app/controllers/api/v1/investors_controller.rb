require 'pry'

class Api::V1::InvestorsController < ApplicationController

  # POST /investors
  # POST /investors.json
  def create
    binding.pry
    render json: @investor
  end

  private

    # Only allow a list of trusted parameters through.
    def investor_params
      params.require(:investor).permit(:firstName, :lastName, :dateOfBirth, :phoneNumber, :streetAddress, :state, :zipCode, :file)  
    end
end
