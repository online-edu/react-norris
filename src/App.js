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
import auth from './utils/auth';
import { route } from './utils/config';
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
          <Route
            path="/jokes"
            render={() =>
              auth.isUserLoggedIn() ? <Jokes /> : <Redirect to={route.login} />
            }
          />
          <Route path={route.login} component={Login} />
        </Switch>
      </BrowserRouter>
    </section>
    <Footer />
  </div>
);

export default App;
