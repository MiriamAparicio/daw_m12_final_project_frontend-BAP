import React, { Component } from 'react';

import './Status.css';

class Status extends Component {
  getColor = status => {
    let current = {
      color: '',
      text: ''
    };

    switch (status) {
      case false:
        current.color = 'is-danger';
        current.text = 'Rebutjat';
        break;
      case true:
        current.color = 'is-success';
        current.text = 'Acceptat';
        break;
      default:
        current.color = 'is-warning';
        current.text = 'Pendent';
    }
    return current;
  };

  render() {
    const { _id, status, readOnly, statusUpdateHandler, ind } = this.props;
    const current = this.getColor(status);

    return (
      <>
        <div className="comment-status">
          <span className={`tag ${current.color} status-tag`}>
            {current.text}
          </span>
          {!readOnly && (
            <span className="acceptDecline">
              <span
                name="accept"
                id={_id}
                ind={ind}
                onClick={statusUpdateHandler}
                className="icon is-medium has-text-success"
              >
                <i className="fas fa-check-circle"></i>
              </span>
              <span
                name="decline"
                id={_id}
                ind={ind}
                onClick={statusUpdateHandler}
                className="icon is-medium has-text-danger"
              >
                <i className="fas fa-times-circle"></i>
              </span>
            </span>
          )}
        </div>
      </>
    );
  }
}

export default Status;
