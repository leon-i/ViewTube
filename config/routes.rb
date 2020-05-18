Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:create, :show]
    resources :videos, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:index, :create]
    end
    get :search, controller: :videos
    get :subscriptions, controller: :videos
    resources :comments, only: [:update, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :views, only: [:create]
    resources :subscriptions, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
