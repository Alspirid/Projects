import React from 'react';
import GreetingContainer from './greeting_container';
import {Link} from 'react-router-dom';

const Greeting = (props) => {
  // console.log(props);
  if (props.currentUser === null) {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    );
  } else {
    return (
      <div>
        <p> Welcome to BenchBnB, {props.currentUser.username}</p>
        <button onClick={props.logout}>Log out</button>
      </div>
    );
  }
};

export default Greeting;
