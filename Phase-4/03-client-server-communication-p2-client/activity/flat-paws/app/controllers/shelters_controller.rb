class SheltersController < ApplicationController
    def index
        render json: Shelter.all
    end 

    def show
        render json: Shelter.find(params[:id])
    end
end
