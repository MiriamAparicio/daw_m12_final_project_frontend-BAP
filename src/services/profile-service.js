import axios from 'axios';

const apiUrl = 'http://localhost:3000/profile';

class UserProfile {
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
    const { _id, username, name, surname, email, postalCode } = user;
    const config = this.getConfig(token);
    return this.profile.post(
      '/',
      {
        _id,
        username,
        name,
        surname,
        email,
        cp: postalCode
        //password: '123456Aa' //TODO delete when BE is fixed
      },
      config
    );
  }
}

const userProfile = new UserProfile();

export default userProfile;
