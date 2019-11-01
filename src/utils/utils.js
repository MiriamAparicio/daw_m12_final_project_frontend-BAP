import jwt_decode from 'jwt-decode';

/**
 *
 * @param {String} token
 * @returns {Object} user
 * function to decode token in order to have all the info from the logged user (email, name, ...)
 */
export function decodeToken(token) {
  const user = jwt_decode(token);
  return user;
}
