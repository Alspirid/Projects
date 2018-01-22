const APIUtil = {
  
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'post',
      dataType: "json"
    });
  },
  
  unfollowUser: id => {
     return $.ajax({
       url: `/users/${id}/follow`,
       method: 'delete',
       dataType: "json"
     });
   },
   
   searchUsers: (query, success) => {
     return $.ajax({
       url: '/users/search',
       method: 'get',
       data: { query },
       dataType: 'json',
       success: success,
     });
   },
 };

module.exports = APIUtil;
