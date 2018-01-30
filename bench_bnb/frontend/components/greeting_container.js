import {connect} from 'react-redux';
import {logout} from '../actions/session_actions';
import Greeting from './greeting';

const mapSTP = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapSTP, mapDTP)(Greeting);
