import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../../services/auth-service';

class Logout extends Component {

    handleLogout () {
        const token = localStorage.getItem('token');
        authService.logout(token);
    }

    render () {
        return(
            <Link 
            replace to="/" 
            style={{ color: 'darkgrey', 'font-weight': '700' }}
            onClick={this.handleLogout}
            activeClassName="logout-button">
                Tanca sessió
            </Link>
        );
    }

}

export default Logout;