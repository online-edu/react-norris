import session from './session';

/**
 * Auth service for authorization.
 */
export default {
  /**
   * Check user current session exist or not.
   *
   * @returns {boolean}
   */
  isUserLoggedIn: () => {
    const currentSession = session.getSession();
    return currentSession !== null;
  },
  /**
   * Get username to display on hedaer.
   *
   * @returns {boolean}
   */
  getUser: () => {
    let currentSession = session.getSession();
    let username;
    if (currentSession) {
      currentSession = JSON.parse(currentSession);
      username = currentSession.username;
      return username;
    }
    return username;
  },
};
