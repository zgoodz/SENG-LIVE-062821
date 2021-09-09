class PetSerializer < ActiveModel::Serializer
  attributes :id, :breed, :name, :age, :weight, :gps_chip, :shelter_id

  belongs_to :shelter
end
