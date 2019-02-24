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
    const currentSession = session.getSession();
    if (currentSession) {
      const { username } = JSON.parse(currentSession);
      return username;
    }
    return 'Guest';
  },
};
