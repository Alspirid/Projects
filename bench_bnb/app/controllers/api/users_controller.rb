class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @errors = []
    if @user.save
      session[:session_token] = @user.reset_session_token!
      render :show
    else
      @errors += @user.errors.full_messages
      render :show, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
