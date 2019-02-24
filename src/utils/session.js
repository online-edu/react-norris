import { sessionKey } from './config';
/**
 * Session service for route restriction.
 */
export default {
  /**
   * Creates user session on successful login.
   *
   * @param {string} username - user id
   */
  startSession: (username) => {
    const user = {
      username,
      token: `${username}${Date.now()}`,
    };
    sessionStorage.setItem(sessionKey, JSON.stringify(user));
  },
  /**
   * End user sesssion on log out.
   */
  endSession: () => sessionStorage.removeItem(sessionKey),
  /**
   * Return current sesssion of user.
   */
  getSession: () => sessionStorage.getItem(sessionKey),
};
