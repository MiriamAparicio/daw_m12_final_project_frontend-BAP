import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActionCreators from '../../../store/user/actions';
import { bindActionCreators } from 'redux';

class Logout extends Component {
    static propTypes = {
        token: PropTypes.string.isRequired,
        handleLogoutUser: PropTypes.func
    }

    handleLogout = () => {
        return this.props.handleLogoutUser(this.props.token);
    }

    render () {
        return(
            <Link 
            replace to="/" 
            className="navbar-text"
            onClick={this.handleLogout}>
                Tanca sessió
            </Link>
        );
    }

}

const mapStateToProps = ({ user }) => ({
    token: user.token
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(userActionCreators, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Logout);