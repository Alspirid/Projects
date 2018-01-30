json.currentUser do
  if @user
    json.partial! "user", user: @user
  else
    json.null!
  end
end

json.errors @errors
