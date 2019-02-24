/** Api url for the jokes. */
const api = 'https://api.icndb.com/jokes';
/** Session key */
const sessionKey = 'SES_ID';
/** Routes  */
const route = {
  jokes: '/jokes',
  login: '/login',
};
/** Form errors  */
const formErrors = {
  longPassword: {
    label: 'Length',
    type: 'longPassword',
    message: 'Password cannot be more than 32 characters.',
  },
  ignoreCase: {
    label: 'Invalid',
    message: 'Characters (i,I,O) are not allowed.',
  },
  lowerCase: {
    label: 'Alphabets',
    message: 'Only lowercase alphabets are allowed.',
  },
  sequencePattern: {
    label: 'Pattern',
    message:
      'Must include one increasing straight of at least three letters, like abc, cde,etc.',
  },
  pairPattern: {
    label: 'Pattern',
    message: 'At least two non-overlapping pairs of letters.',
  },
};

export { api, route, sessionKey, formErrors };
