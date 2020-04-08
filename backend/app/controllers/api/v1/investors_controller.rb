require 'pry'

class Api::V1::InvestorsController < ApplicationController

  # POST /investors
  # POST /investors.json
  def create
    @investor = Investor.create(investor_params)
    if @investor.valid?
      render json: @investor
    else 
      render json: @investor.errors.full_messages
    end
    
  end

  private

    # Only allow a list of trusted parameters through.
    def investor_params
      params.require(:investor).permit(:firstName, :lastName, :dateOfBirth, :phoneNumber, :streetAddress, :state, :zipCode, :file)  
    end
end
