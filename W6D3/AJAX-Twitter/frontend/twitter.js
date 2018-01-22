const FollowToggle = require('./follow_toggle');

$(function () {
    $('.follow-toggle').each(function (_, ele) {
      new FollowToggle(ele);
    });
  }
);
