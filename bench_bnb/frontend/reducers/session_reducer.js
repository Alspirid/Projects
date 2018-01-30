import _ from 'lodash';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
} from '../actions/session_actions';

const _initialState = {
  currentUser: null
};

const sessionReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case (RECEIVE_CURRENT_USER):
      newState = {currentUser: action.currentUser};
      return _.merge({}, state, newState);
    default:
      return state;
  }
};

export default sessionReducer;
