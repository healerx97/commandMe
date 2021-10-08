# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
require 'date'

puts 'destroying data'
User.destroy_all
User.reset_pk_sequence
Task.destroy_all
Task.reset_pk_sequence
Attachment.destroy_all
Attachment.reset_pk_sequence

10.times do
    User.create(username: Faker::Internet.username, name: Faker::Name.first_name, password: "asdf")
end

time = Time.current + 1.days

20.times do
    Task.create(due_date: time, title: Faker::Hobby.activity, commander_id: rand(1..10), reviewed: false, receiver_id: rand(1..10))
end

puts 'done'