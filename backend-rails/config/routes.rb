# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  namespace :api do
    # get 'tasks/index'
    resources :tasks, only: :index
  end

  # Defines the root path route ("/")
  # root "articles#index"
end
