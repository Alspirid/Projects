import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import SearchContainer from './search_container';

const App = () => (
  <div>
    <header>
      <h1>BenchBnB</h1>
      <GreetingContainer />
    </header>
    <Route exact path="/" component={ SearchContainer } />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
  </div>
);

export default App;
