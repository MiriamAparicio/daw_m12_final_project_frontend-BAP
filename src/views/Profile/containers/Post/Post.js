import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Post.css';

import PostForm from '../../components/PostForm/PostForm';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    handleCancelPublish: PropTypes.func,
    handleCreatePost: PropTypes.func,
    handleDeletePost: PropTypes.func,
    handleEditPost: PropTypes.func
  };

  render() {
    return (
      <PostForm
        post={this.props.post}
        userId={this.props.userId}
        handleCancelPublish={this.props.handleCancelPublish}
        handleCreatePost={this.props.handleCreatePost}
        handleDeletePost={this.props.handleDeletePost}
        handleEditPost={this.props.handleEditPost}
        error={this.props.error}
      ></PostForm>
    );
  }
}

export default Post;
