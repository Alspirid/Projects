const APIUtil = require('./api_utils');

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);  
    this.userId = $(el).data('user-id') || options.userId;
    this.followState = $(el).data('initial-follow-state') || options.followState;
    this.render();
    this.$el.on('click',e => this.handleClick(e));
  }
  render(){
    if (this.followState === "followed") {
      this.$el.prop('disabled', false);
      this.$el.text("Unfollow!");
  } else if (this.followState === "unfollowed"){
      this.$el.prop('disabled', false);
      this.$el.text("Follow!");
  } else if (this.followState === "following") {
      this.$el.prop('disabled', true);
      this.$el.text("Following!");
  } else if (this.followState === "unfollowing"){
      this.$el.prop('disabled', true);
      this.$el.text("Unfollowing!");
  }
}


  handleClick(event) {
    event.preventDefault();
    const followToggle = this;
    if (this.followState === 'followed') {
      this.followState = 'unfollowing';
      this.render();
      APIUtil.unfollowUser(this.userId).then(()=>{
        followToggle.followState = 'unfollowed';
      });
    } else {
      this.followState = 'following';
      this.render();
      APIUtil.followUser(this.userId).then(()=>{
        followToggle.followState = 'followed';
        followToggle.render();
      });
    } 
  //
  // await $.ajax({
  //   url: `/users/${this.userId}/follow`,
  //   method: method,
  //   dataType: "json"
  // }); 
  }
}
  
  
  
module .exports = FollowToggle;
