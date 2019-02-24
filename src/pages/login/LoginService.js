import session from '../../utils/session';
import { formErrors } from '../../utils/config';

/**
 * Validate password for given criteria.
 *
 * @param {string} password - Password
 * @returns {Object}
 */
const validatePassword = (password) => {
  let error = [];
  const pwdAscii = password.split('').map(c => c.charCodeAt());
  let sequencePattern = false;
  let pairPattern = false;
  let pairs = [];

  pwdAscii.every((charCode, i) => {
    const currrent = charCode; // current character ascii value
    const next = pwdAscii[i + 1]; // next character ascii value
    /** Sequential characters are required up to 3, e.g. abc. */
    if (!sequencePattern) {
      sequencePattern = currrent + 1 === next && currrent + 2 === pwdAscii[i + 2];
    }
    /** Check for pairs for the same charaters at least two, e.g aa, bb. */
    if (pairs.length < 2) {
      if (next === currrent) {
        const [firstPair] = pairs;
        if (firstPair) {
          const [first, second] = firstPair;
          pairPattern = first !== currrent && second !== next;
        }
        pairs = [...pairs, [next, currrent]];
      }
    }
    return !(sequencePattern && pairPattern);
  });
  /** Check i,I,O is exist in password. */
  error = password.match(/(i|I|o)/) ? [...error, formErrors.ignoreCase] : error;
  /** Allow only lower case in password. */
  error = password.match(/([A-Z|0-9])/) ? [...error, formErrors.lowerCase] : error;
  /** Length should not be more than 32. */
  error = password.length >= 32 ? [formErrors.longPassword] : error;
  /** Sequential characters are required up to 3. */
  error = sequencePattern ? error : [...error, formErrors.sequencePattern];
  /** Check for pairs for the same charaters at least two. */
  error = pairPattern ? error : [...error, formErrors.pairPattern];

  return error.length > 0 ? { valid: false, error } : { valid: true };
};

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
