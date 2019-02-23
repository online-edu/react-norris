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

/**
 * Clear older user session.
 */
const clearUserSession = () => session.endSession();

export { createUserSession, validatePassword, clearUserSession };
