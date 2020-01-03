import React from 'react'
import './Comment.css';

export default function Comment(props) {
  const { updateHandler, userId: user = 'username', text = 'Sense contingut', title = 'Sense titol', status = false } = props.message;

  return (
    <>
      <div className="message-container box" >
        <div className="user-info has-text-centered is-hidden-tablet">
          <figure className="image avatar is-96x96 post-image">
            <img
              className="is-rounded"
              src={user.image || "https://bulma.io/images/placeholders/64x64.png"}
              alt={user.username}
            />
          </figure>
          <div className="user">{user.username}</div>
          {!status && <>&nbsp;&nbsp;<span className="tag is-warning">Pendent..</span></>}
          {/* {status && <>&nbsp;&nbsp;<span className="tag is-success">Acceptat</span></>}
          {!status && <>&nbsp;&nbsp;<span className="tag is-danger">Declinat</span></>} */}
        </div>
        <article className="media">
          <div className="media-left is-hidden-mobile">
            <figure className="image is-64x64">
              <img
                className="is-rounded"
                src={user.image || "https://bulma.io/images/placeholders/64x64.png"}
                alt={user.username}
              />
            </figure>
            <div className="user">{user.username}</div>
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
            {!status && <>&nbsp;&nbsp;<span className="tag is-warning status-tag">Pendent..</span></>}
            {/* {status && <>&nbsp;&nbsp;<span className="tag is-success">Acceptat</span></>}
            {!status && <>&nbsp;&nbsp;<span className="tag is-danger">Declinat</span></>} */}
            <span className="acceptDecline">
              <span onClick={updateHandler} className="icon is-medium has-text-success">
                <i className="fas fa-check-circle"></i>
              </span>
              <span onClick={updateHandler} className="icon is-medium has-text-danger">
                <i className="fas fa-times-circle"></i>
              </span>
            </span>
          </div>
        </article>
      </div >


    </>
  )
}
