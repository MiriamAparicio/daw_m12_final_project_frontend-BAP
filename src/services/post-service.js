import axios from 'axios';

const apiUrl = 'http://localhost:3000/posts';

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

  fetchPostByPC(postalCode, token, distance = 30) {
    const config = this.getConfig(token);
    return this.post.get(
      `/postalCode/${postalCode}?distance=${distance}`,
      config
    );
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

  updatePost(post, token) {
    const config = this.getConfig(token);
    return this.post.put(`/${post._id}`, post, config);
  }

  deletePost(postId, token) {
    const config = this.getConfig(token);
    return this.post.delete(`/${postId}`, config);
  }
}

const postService = new PostService();

export default postService;
