import { sessionKey } from './config';
/**
 * Session service for route restriction.
 */
export default {
  /**
   * Creates user session on successful login
   */
  startSession(username) {
    const now = Date.now();
    sessionStorage.setItem(sessionKey, atob(`${username}${now}`));
  },
  endSession() {
    sessionStorage.removeItem(sessionKey);
  },
};
