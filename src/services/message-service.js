import axios from 'axios';

const apiUrl = 'http://localhost:3000/messages';

class MessageService {
  constructor() {
    this.message = axios.create({
      baseURL: apiUrl,
      withCredentials: false // set to true if we need cookies
    });
  }

  getConfig(token) {
    return { headers: { 'access-token': token } };
  }

  updateMessage (message, token) {
    const config = this.getConfig(token);
    return this.message.put(`/${message._id}`, config);
  }

}
