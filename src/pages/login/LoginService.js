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
  const ignoreCharacters = /(i|I|o)/;
  const onlyLowerCase = /([A-Z|0-9])/;
  const tooLongPassword = password.length >= 32;
  const pwdAscii = password.split('').map(c => c.charCodeAt());
  let sequencePattern = false;
  let pairPattern = false;

  if (tooLongPassword) {
    error = [formErrors.longPassword];
  }

  if (password.match(ignoreCharacters)) {
    error = [...error, formErrors.ignoreCase];
  }

  if (password.match(onlyLowerCase)) {
    error = [...error, formErrors.lowerCase];
  }

  pwdAscii.every((charCode, i) => {
    const currrent = charCode;
    const next = pwdAscii[i + 1];
    // Sequence such as abc or def
    if (!sequencePattern) {
      sequencePattern = currrent + 1 === next && currrent + 2 === pwdAscii[i + 2];
    }
    // Pair such as aa or bb
    if (!pairPattern) {
      pairPattern = next === currrent;
    }

    return !(sequencePattern && pairPattern);
  });

  error = sequencePattern ? error : [...error, formErrors.sequencePattern];
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
