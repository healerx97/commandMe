class AttachmentSerializer < ActiveModel::Serializer
  attributes :id
  has_one :request
end
