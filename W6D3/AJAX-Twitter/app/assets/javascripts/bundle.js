/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);

$(function () {
    $('.follow-toggle').each(function (_, ele) {
      new FollowToggle(ele);
    });
  }

);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map