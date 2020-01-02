import axios from 'axios';

const apiUrl = 'http://localhost:3000/availability';

class AvailabilityService {
  constructor() {
    this.availability = axios.create({
      baseURL: apiUrl,
      withCredentials: false // set to true if we need cookies
    });
  }

  getConfig(token) {
    return { headers: { 'access-token': token } };
  }

  fetchAvailability(postId, token) {
    const config = this.getConfig(token);
    return this.availability.get(`/${postId}`, config);
  }

  addAvailability(postId, calendar, token) {
    const config = this.getConfig(token);
    return this.availability.post(
      '/',
      {
        postId,
        calendar
      },
      config
    );
  }

  updateAvailability(postId, calendar, token) {
    const config = this.getConfig(token);
    return this.availability.put(`/${postId}`, { calendar }, config);
  }

  //the delete is made at API level when deleting a post
}

const availabilityService = new AvailabilityService();

export default availabilityService;
