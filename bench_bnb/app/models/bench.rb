class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
  # google map bounds will be in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }
  #... query logic goes here
    benches = Bench.where("(lat BETWEEN ? AND ?) AND (lng BETWEEN ? AND ?)",
      bounds[:southWest][:lat],
      bounds[:northEast][:lat],
      bounds[:northEast][:lng],
      bounds[:southWest][:lng],
    )
    p benches
    benches
  end
end
