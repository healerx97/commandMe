Rails.application.routes.draw do
  
  resources :attachments
  resources :tasks
  resources :users, only: [:index, :destroy]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  get '/received', to: 'tasks#received'
  get '/sent', to: 'tasks#sent'

  patch '/accept/:id', to: 'tasks#accept'
  patch '/notaccept/:id', to: 'tasks#notAccept'

  patch '/review/:id', to: 'tasks#review'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
