class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    @errors = []
    if @user
      session[:session_token] = @user.reset_session_token!
      render :show
    else
      @errors += ['Invalid credentials']
      render :show, status: 401
    end
  end

  def destroy
    @user = current_user;
    @errors = [];
    if @user
      @user.reset_session_token!
      @user.save
      session[:session_token] = nil
      @user = nil;
      render :show
    else
      @errors = ['No current user']
      render :show, status: 404
    end
  end

end
