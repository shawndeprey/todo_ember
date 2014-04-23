Todo::Application.routes.draw do
  root 'default#index'
  get '*path' => 'default#index'
end