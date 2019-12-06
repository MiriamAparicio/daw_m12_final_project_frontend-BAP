import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import profileService from '../../../../services/profile-service';
import postService from '../../../../services/post-service';
import * as userActionCreators from '../../../../store/user/actions';
import './Profile.css';

import NavBar from '../../../../components/NavBar/NavBar';
import ProfileForm from '../ProfileForm/ProfileForm';
import Post from '../Post/Post';

class Profile extends Component {
  static propTypes = {
    error: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    handleUpdateUser: PropTypes.func.isRequired
  };

  state = {
    profile: {},
    post: {
      _id: ''
    },
    isEditting: false,
    isPublishing: false,
    error: ''
  };

  componentDidMount() {
    //TODO id should be the one from the user when navigating from the posts list
    const { user, token } = this.props;
    this.handleFetchUserProfile(user._id, token);
    this.handleFetchUserPost(user._id, token);
  }

  handleFetchUserPost(id, token) {
    return postService
      .fetchPostByOwnerId(id, token)
      .then(response => {
        this.setState({
          post: response.data.ad //TODO refactor names
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleFetchUserProfile(id, token) {
    return profileService
      .fetchUserProfile(id, token)
      .then(response => {
        this.setState({
          profile: response.data.user
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleSubmitProfile = ({
    username,
    name,
    surname,
    postalCode,
    email
  }) => e => {
    e.preventDefault();
    this.props
      .handleUpdateUser(
        {
          username,
          name,
          surname,
          email,
          postalCode
        },
        this.props.token
      )
      .then(async () => {
        const { user, token } = this.props;
        await this.handleFetchUserProfile(user._id, token);
        !this.props.error
          ? this.setState({ isEditting: false })
          : this.setState({ isEditting: true });
      });
  };

  handleCreatePost = post => {
    return postService
      .createPost(post, this.props.token)
      .then(response => {
        this.setState({ post: response.data });
      })
      .catch(error => {
        console.error(error);
        this.setState({ error });
      });
  };

  //handleEditPost
  handleDeletePost = () => {
    return postService
      .deletePost(this.state.post._id, this.props.token)
      .then(() => {
        this.setState({ post: { _id: '' } });
      })
      .catch(error => {
        console.error(error);
        this.setState({ error });
      });
  };

  handlePublish = isPublishing => {
    this.setState({ isPublishing });
  };

  handleCancelPublish = () => {
    this.setState({ isPublishing: false });
  };

  render() {
    const { profile, isEditting, isPublishing, post, error } = this.state;
    const publishPost = post._id || isPublishing;
    return (
      <>
        <NavBar isUserLogged={!!this.props.user} />
        <section
          id="profile"
          className="hero is-fullheight form-hero"
        >
          <div className="hero-body profile-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div
                  className="column is-three-fifths-desktop is-four-fifths-tablet
              is-offset-one-fifth-desktop is-offset-1-tablet box main"
                >
                  <h2 className="form-title is-3 has-text-left is-hidden-tablet">
                    Perfil
                  </h2>
                  <ProfileForm
                    user={this.props.user}
                    profile={profile}
                    handleSubmit={this.handleSubmitProfile}
                    handlePublish={this.handlePublish}
                    isEditting={isEditting}
                    isPublishing={isPublishing}
                    error={this.props.error}
                    postId={post._id}
                  />
                  {publishPost && (
                    <Post
                      post={post}
                      userId={this.props.user._id}
                      handleCancelPublish={this.handleCancelPublish}
                      handleCreatePost={this.handleCreatePost}
                      handleDeletePost={this.handleDeletePost}
                      error={error}
                    ></Post>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.data,
  error: user.error,
  token: user.token
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
