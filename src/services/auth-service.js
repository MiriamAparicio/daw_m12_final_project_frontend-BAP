//add service for authentication
import axios from 'axios';

const apiUrl = 'http://localhost:3000/auth';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: apiUrl,
      withCredentials: false // set to true if we need cookies
    });
  }

  async signup(user) {
    const { username, name, surname, email, password, location } = user;
    return (
      this.auth
        .post('/signup', {
          username,
          name,
          surname,
          email,
          password,
          location
        })
        // TODO resoldre error del BE 500 i llavor posar el catch al metode del component que fa el request
        .catch(e => {
          console.log(e);
        })
    );
  }

  async login(user) {
    const { email, password } = user;
    return this.auth.post('/login', { email, password });
  }

  // TODO: logout
}

const authService = new AuthService();

export default authService;
