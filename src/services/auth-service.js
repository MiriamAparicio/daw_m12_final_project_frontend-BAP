//add service for authentication
import axios from 'axios';

const apiUrl = 'http://localhost:3000';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: apiUrl,
      withCredentials: false // set to true if we need cookies
    });
  }

  signup(user) {
    const { username, name, surname, postalCode, email, password } = user;
    return this.auth.post('/signup', {
      username,
      name,
      surname,
      postalCode,
      email,
      password
    });
  }

  login(user) {
    const { email, password } = user;
    return this.auth.post('/login', { email, password });
  }

  // TODO: logout
}

const authService = new AuthService();

export default authService;
