import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import profileService from '../../../../services/profile-service';
import postService from '../../../../services/post-service';
import * as userActionCreators from '../../../../store/user/actions';
import { PROFILE_BREADCRUMBS } from '../../../../utils/constants';
import './Profile.css';

import NavBar from '../../../../components/NavBar/NavBar';
import ProfileForm from '../ProfileForm/ProfileForm';
import Post from '../Post/Post';
import PublicProfile from '../../components/PublicProfile/PublicProfile';
import ProfileComments from '../ProfileComments/ProfileComments';

export class Profile extends Component {
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
    error: '',
    tab: 'scheduler'
  };

  componentDidMount = () => {
    const { user, token, match } = this.props;
    const id =
      match && match.path === '/profile/:id' ? match.params.id : user._id;
    this.updateProfile(id, token);
  };

  componentDidUpdate(prevProps) {
    const { id: prevId } = prevProps.match.params;
    const { id: newId } = this.props.match.params;
    const { token } = this.props;

    if (prevId !== newId) this.updateProfile(newId, token);
  }

  updateProfile(id, token) {
    this.handleFetchUserProfile(id, token);
    this.handleFetchUserPost(id, token);
  }

  handleFetchUserPost(id, token) {
    return postService
      .fetchPostByOwnerId(id, token)
      .then(response => {
        if (response.status === 204) {
          this.setState({
            post: {
              _id: ''
            }
          });
        } else {
          this.setState({
            post: response.data.post // TODO refactor names
          });
        }
      })
      .catch(error => {
        console.error(error);
        this.setState({
          post: {
            _id: ''
          }
        });
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

  handleEditPost = post => {
    return postService
      .updatePost(post, this.props.token)
      .then(() => {
        this.setState({ post });
      })
      .catch(error => {
        console.error(error);
        this.setState({ error });
      });
  };

  handleDeletePost = () => {
    return postService
      .deletePost(this.state.post._id, this.props.token)
      .then(() => {
        this.setState({
          post: { _id: '' },
          isPublishing: false
        });
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

  tabsHandler = (event, tab = 'scheduler') => {
    event.preventDefault();
    this.setState({ ...this.state, tab });
  }

  render() {
    const { profile, isEditting, isPublishing, post, error, tab } = this.state;
    const publishPost = post._id || isPublishing;

    return (
      <>
        <NavBar
          isUserLogged={!!this.props.user}
          breadcrumbs={PROFILE_BREADCRUMBS}
        />
        <section id="profile" className="hero is-fullheight form-hero">
          <div className="hero-body profile-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div
                  className="column is-three-fifths-desktop is-four-fifths-tablet
              is-offset-one-fifth-desktop is-offset-1-tablet box main"
                >
                  {this.props.user._id === profile._id ? (
                    <>
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
                    </>
                  ) : (
                    <PublicProfile profile={profile} />
                  )}
                  {publishPost && (
                    <Post
                      post={post}
                      userId={this.props.user._id}
                      handleCancelPublish={this.handleCancelPublish}
                      handleCreatePost={this.handleCreatePost}
                      handleDeletePost={this.handleDeletePost}
                      handleEditPost={this.handleEditPost}
                      error={error}
                    />
                  )}
                  {post._id &&
                    <div className="tabs is-boxed">
                      <ul>
                        <li className={tab === 'scheduler' ? 'is-active' : ''}>
                          <a onClick={(event) => this.tabsHandler(event, 'scheduler')} href="/">
                            <span className="icon is-small"><i className="fas fa-calendar" aria-hidden="true"></i></span>
                            <span>Calendari</span>
                          </a>
                        </li>
                        <li className={tab === 'comments' ? 'is-active' : ''}>
                          <a onClick={(event) => this.tabsHandler(event, 'comments')} href="/">
                            <span className="icon is-small"><i className="fas fa-comment" aria-hidden="true"></i></span>
                            <span>Comentaris</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  }
                  {tab === 'scheduler' && post._id && <p>Calendari</p>}
                  {tab === 'comments' && post._id && <ProfileComments />}
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
