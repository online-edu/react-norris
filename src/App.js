import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Header, Footer } from './components';
import Jokes from './pages/jokes/Jokes';

/**
 * App component.
 */
const App = () => (
  <div className="jokes-container">
    <Header />
    <BrowserRouter>
      <Switch>
        <Redirect from="/" exact to="/jokes" />
        <Route path="/jokes" component={Jokes} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
