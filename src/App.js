import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { Footer, Spinner, NotFound } from './components';
import Login from './pages/login/Login';
import auth from './utils/auth';
import { route } from './utils/config';
import './App.scss';

/**
 * Lazily load joke component.
 */
const Jokes = withRouter(
  lazy(() => import(/* webpackChunkName: "jokes" */ './pages/jokes/Jokes')),
);
/**
 * App component.
 */
const App = () => (
  <div className="jokes-container">
    <section>
    <Suspense
        fallback={
          <div className="jokes-container__fallback d-flex justify-content-center align-items-center">
            <Spinner />
          </div>
        }
      >
        <BrowserRouter>
          <Switch>
            <Redirect from="/" exact to="/jokes" />
            <Route
              path="/jokes"
              render={() => (auth.isUserLoggedIn() ? <Jokes /> : <Redirect to={route.login} />)}
            />
            <Route path={route.login} component={Login} />
            <Route exact path="**" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </section>
    <Footer />
  </div>
);

export default App;
