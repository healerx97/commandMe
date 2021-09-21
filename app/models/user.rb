class User < ApplicationRecord
    has_secure_password

    has_many :requests, foreign_key: :receiver_id, class_name: "Task", dependent: :destroy
    has_many :commanders, through: :requests

    has_many :commands, foreign_key: :commander_id, class_name: "Task", dependent: :destroy
    has_many :receivers, through: :commands


end
