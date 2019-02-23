import session from '../../utils/session';

/**
 * Validate password
 *
 * @param {string} password - Password
 * @returns {boolean}
 */
const validatePassword = password => true;

/**
 * Store user session.
 *
 * @param {string} password - Password
 * @returns {boolean}
 */
const createUserSession = username => session.startSession(username);

export { createUserSession, validatePassword };
