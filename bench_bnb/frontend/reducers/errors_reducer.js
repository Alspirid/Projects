import {combineReducers} from 'redux';
import sessionErrorReducer from './session_errors_reducer';

const errorReducer = combineReducers({
  session: sessionErrorReducer
});

export default errorReducer;
