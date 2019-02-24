import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../components';
import {
  validatePassword,
  createUserSession,
  clearUserSession,
} from './LoginService';
import { route } from '../../utils/config';
import './Login.scss';

/**
 * Login component.
 */
class Login extends Component {
  /**
   * Login props types.
   */
  static get propTypes() {
    return {
      /** History object */
      history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
    };
  }

  /**
   * Intilalizes the state and binds all methods.
   *
   * @param {Object} props - access 'props'
   */
  constructor(props) {
    super(props);
    this.state = {
      formErrors: [],
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    clearUserSession();
  }

  /**
   * Validate form and change route on successful
   *
   * @param {event} e - Inpput event
   */
  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const { history } = this.props;
    const { valid, error: formErrors } = validatePassword(password);
    if (valid) {
      createUserSession(username);
      history.push(route.jokes);
    } else {
      this.setState({ formErrors });
    }
  }

  /**
   * Handles input event for value and validation.
   *
   * @param {event} e - Inpput event
   */
  handleChange(e) {
    const { target } = e;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  /**
   * Render method for component
   */
  render() {
    const { username, password, formErrors } = this.state;

    return (
      <div>
        <Header />
        <section className="container-fluid px-4 pt-4">
          <div className="row justify-content-center align-items-center jokes-login">
            <div className="col-md-4 col-sm-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="userName">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        name="username"
                        aria-describedby="userNameHelp"
                        placeholder="Enter username"
                        value={username}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleChange}
                      />
                      {formErrors.map(error => (
                        <div className="invalid-feedback" key={error.id}>
                          <strong>
                            {error.label}
                            :&nbsp;
                          </strong>
                          {error.message}
                        </div>
                      ))}
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
