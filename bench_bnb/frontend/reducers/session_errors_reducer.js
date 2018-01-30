import _ from 'lodash';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
} from '../actions/session_actions';

const sessionErrorReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case (RECEIVE_CURRENT_USER):
      newState = action.errors;
      return _.merge([], state, newState);
    case (RECEIVE_ERRORS):
      newState = action.errors;
      return _.merge([], state, newState);
    default:
      return state;
  }
};

export default sessionErrorReducer;
