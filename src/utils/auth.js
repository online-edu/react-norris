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
    const currentSession = session.getSession(this);
    return currentSession !== null;
  },
};
