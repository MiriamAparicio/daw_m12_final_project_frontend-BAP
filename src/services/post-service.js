import axios from 'axios';

const apiUrl = 'http://localhost:3000/adds';

class PostService {
  constructor() {
    this.post = axios.create({
      baseURL: apiUrl,
      withCredentials: false // set to true if we need cookies
    });
  }

  getConfig(token) {
    return { headers: { 'access-token': token } };
  }

  fetchPostByOwnerId(ownerId, token) {
    const config = this.getConfig(token);
    return this.post.get(`/${ownerId}`, config);
  }

  createPost(post, token) {
    const { title, description, range, services, price } = post;
    const config = this.getConfig(token);
    return this.post.post(
      '/',
      {
        title,
        description,
        range,
        services,
        price
      },
      config
    );
  }
  //TODO
  //updatePost()

  deletePost(postId, token) {
    const config = this.getConfig(token);
    return this.post.delete(`/${postId}`, config);
  }
}

const postService = new PostService();

export default postService;
