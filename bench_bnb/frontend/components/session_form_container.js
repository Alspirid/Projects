import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, signup} from '../actions/session_actions';
import {withRouter} from 'react-router-dom';

const mapSTP = (state, ownProps) => {
  return {
    loggedIn: state.session.currentUser === null ? false : true,
    errors: state.errors.session,
    formType: ownProps.match.path === "/login" ? "login" : "signup"
  };
};

const mapDTP = (dispatch, ownProps) => {
  if (ownProps.match.path === "/login") {
    return {
      processForm: (user) => dispatch(login(user))
    };
  } else {
    return {
      processForm: (user) => dispatch(signup(user))
    };
  }
};

export default withRouter(connect(mapSTP, mapDTP)(SessionForm));
