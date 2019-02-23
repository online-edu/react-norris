import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Jokes from './pages/jokes/Jokes';
/**
 * App component.
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect from="/" exact to="/jokes" />
          <Route path="/jokes" component={Jokes} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
