class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  include ApplicationHelper

  def render_not_found
    redirect_to root_path, alert: "We couldn't find the page you were looking for. Sorry about that!"
  end

  def not_found
    raise ActionController::RoutingError.new("We couldn't find the page you were looking for. Sorry about that!")
  end
end
