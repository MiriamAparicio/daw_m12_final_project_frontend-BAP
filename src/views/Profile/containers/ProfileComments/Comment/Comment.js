import React from 'react'
import Status from '../Status/Status';
import { connect } from 'react-redux';

function Comment(props) {
  const { _id = 'id', userId: messageOwner = 'username', text = 'Sense contingut', title = 'Sense titol', status = null } = props.message;
  const { ind, readOnly, statusUpdateHandler, post } = props;

  return (
    <>
      <div className="message-container box" >
        <div className="user-info has-text-centered is-hidden-tablet">
          <figure className="image avatar is-96x96 post-image">
            <img
              className="is-rounded"
              src={messageOwner.image || "https://bulma.io/images/placeholders/64x64.png"}
              alt={messageOwner.username}
            />
          </figure>
          <div className="user">{messageOwner.username}</div>
          {post.owner !== messageOwner._id && (
            <Status
              _id={_id}
              ind={ind}
              status={status}
              statusUpdateHandler={statusUpdateHandler}
              readOnly={readOnly}
            />
          )}
        </div>
        <article className="media">
          <div className="media-left is-hidden-mobile">
            <figure className="image is-64x64">
              <img
                className="is-rounded"
                src={messageOwner.image || "https://bulma.io/images/placeholders/64x64.png"}
                alt={messageOwner.username}
              />
            </figure>
            <div className="user">{messageOwner.username}</div>
          </div>

          <div className="media-content is-paddingless">
            <div className="post-title">
              <div className="columns is-marginless service-columns">
                <div className="column is-paddingless is-four-fifths service-column">
                  {title}
                </div>
              </div>
            </div>
            <p>{text}</p>
          </div>
          <div className="is-hidden-mobile">
            {post.owner !== messageOwner._id && (
              <Status
                _id={_id}
                ind={ind}
                status={status}
                statusUpdateHandler={statusUpdateHandler}
                readOnly={readOnly}
              />
            )}
          </div>
        </article>
      </div >
    </>
  )
}

const mapStateToProps = state => {
  return { loggedUserId: state.user.data._id }
}

export default connect(mapStateToProps, null)(Comment);
