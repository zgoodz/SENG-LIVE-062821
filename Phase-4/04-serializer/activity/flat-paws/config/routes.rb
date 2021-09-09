Rails.application.routes.draw do
  # resources :users, only: [:create]
  resources :shelters, only:[:index, :show]
  resources :pets, only:[:index, :show, :create, :update, :destory ]
  post '/login', to: 'sessions#create'
  get '/auth', to: 'users#show'
  post '/signup', to: 'users#create'
  delete '/logout', to: 'sessions#destroy'
end
