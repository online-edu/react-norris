import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Header, Footer } from './components';
import Jokes from './pages/jokes/Jokes';
import Login from './pages/login/Login';
import './App.scss';

/**
 * App component.
 */
const App = () => (
  <div className="jokes-container">
    <Header />
    <section className="container-fluid px-4 pt-4">
      <BrowserRouter>
        <Switch>
          <Redirect from="/" exact to="/jokes" />
          <Route path="/jokes" component={Jokes} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </section>
    <Footer />
  </div>
);

export default App;
