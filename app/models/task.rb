class Task < ApplicationRecord
    belongs_to :commander, class_name: "User"
    belongs_to :receiver, class_name: "User"

    has_many :attachments, dependent: :destroy
end
