import axios from 'axios';

const apiUrl = 'http://localhost:3000/profile';

class ProfileService {
  constructor() {
    this.profile = axios.create({
      baseURL: apiUrl,
      withCredentials: false // set to true if we need cookies
    });
  }

  getConfig(token) {
    return { headers: { 'access-token': token } };
  }

  fetchUserProfile(userId, token) {
    const config = this.getConfig(token);
    return this.profile.get(`/${userId}`, config);
  }

  updateUserProfile(user, token) {
    const { _id, username, name, surname, email, postalCode, image } = user;
    const config = this.getConfig(token);
    return this.profile.put(
      '/',
      {
        _id,
        username,
        name,
        surname,
        email,
        postalCode,
        image
      },
      config
    );
  }
}

const profileService = new ProfileService();

export default profileService;
