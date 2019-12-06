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

export function checkSessionExpired() {
  const hours = 24; // Reset when storage is more than 24hours
  const now = new Date().getTime();
  const loginTime = localStorage.getItem('loginTime');
  if (now - loginTime > hours * 60 * 60 * 1000 || !loginTime) {
    localStorage.removeItem('token');
    localStorage.removeItem('loginTime');
  }
}
