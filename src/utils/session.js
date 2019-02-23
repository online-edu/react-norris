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
  startSession: username => sessionStorage.setItem(sessionKey, atob(`${username}${Date.now()}`)),
  /**
   * End user sesssion on log out.
   */
  endSession: () => sessionStorage.removeItem(sessionKey),
  /**
   * Return current sesssion of user.
   */
  getSession: () => sessionStorage.getItem(sessionKey),
};
