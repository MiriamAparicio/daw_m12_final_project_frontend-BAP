const URL = 'http://localhost:3000/posts/messages/';

const getConfig = token => {
  return { 'Content-Type': 'application/json', 'access-token': token }
}

const getCommentsByUserId = (userId, token) => {
  return fetch(`${URL}${userId}`, {
    headers: getConfig(token)
  });
}

const postCommentByUserId = ({ title = 'No title', message = 'No comment' }, token, userId) => {
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ title, message, userId }),
    headers: getConfig(token)
  });
}

export default {
  getCommentsByUserId,
  postCommentByUserId
}
