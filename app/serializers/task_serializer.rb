class TaskSerializer < ActiveModel::Serializer
  attributes :id, :due_date, :accepted, :reviewed
  belongs_to :commander
  belongs_to :receiver
  
end
