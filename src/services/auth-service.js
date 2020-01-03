import axios from 'axios';

const apiUrl = 'http://localhost:3000/auth';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: apiUrl,
      withCredentials: false // set to true if we need cookies
    });
  }

  getConfig(token) {
    return { headers: { 'access-token': token } };
  }

  signup(user) {
    const { username, name, surname, email, password, postalCode } = user;
    return this.auth.post('/signup', {
      username,
      name,
      surname,
      email,
      password,
      postalCode
    });
  }

  login(user) {
    const { email, password } = user;
    return this.auth.post('/login', { email, password });
  }

  logout(token) {
    const config = this.getConfig(token);
    return this.auth.post('/logout', null, config)
  }
}

const authService = new AuthService();

export default authService;
