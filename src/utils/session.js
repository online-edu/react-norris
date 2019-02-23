import { sessionKey } from './config';
/**
 * Session service for route restriction.
 */
export default {
  /**
   * Creates user session on successful login.
   */
  startSession(username) {
    const now = Date.now();
    sessionStorage.setItem(sessionKey, atob(`${username}${now}`));
  },
  /**
   * End user sesssion on log out.
   */
  endSession() {
    sessionStorage.removeItem(sessionKey);
  },
  /**
   * Return current sesssion of user.
   */
  getSession() {
    return sessionStorage.getItem(sessionKey);
  },
};
