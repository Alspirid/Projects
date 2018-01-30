# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


(0..20).each do |i|
  Bench.create(description: "bench #{i}", lat: (37.74187 + rand(37.80971-37.74187)),
    lng: (-122.47791 + rand(122.47791 - 122.39208 )))
end

Bench.create(description: "bench 1", lat: 37.710451, lng: -122.506326);
Bench.create(description: "bench 1", lat: 37.730151, lng: -122.456326);
Bench.create(description: "bench 1", lat: 37.740431, lng: -122.436332);
Bench.create(description: "bench 1", lat: 37.742351, lng: -122.416326);
