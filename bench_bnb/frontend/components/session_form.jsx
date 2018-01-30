import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    let headerText = "Sign Up";
    let buttonText = "Sign Up";
    if (this.props.formType === "login") {
      headerText = "Log In";
      buttonText = "Log In";
    }
    let errorsIndex = null;
    if (this.props.errors.length > 0)
      errorsIndex = (
        <ul>
          {this.props.errors.map((error) => (
            <li>{error}</li>
          ))}
        </ul>
      );

    if (this.props.loggedIn) {
      return (
        <Redirect to="/" />
      );
    } else {
      return (
        <div>
          <h3>{this.props.errors.length > 0 ? "Errors:" : null}</h3>
          {errorsIndex}

          <form onSubmit={this.handleSubmit.bind(this)}>
            <h1>{headerText}</h1>
            <label>Username
              <input onChange={(e)=>this.setState({username: e.target.value})}
                type="text"/>
            </label>
            <label>Password
              <input onChange={(e)=>this.setState({password: e.target.value})}
                type="password"/>
            </label>
          <input type="submit" value={buttonText} />
          </form>
        </div>
      );
    }
  }
}

export default SessionForm;
