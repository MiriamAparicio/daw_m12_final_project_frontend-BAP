import React from 'react'
import Rating from 'react-rating';

export default function Comment(props) {
  const { userId: user = 'username', text = 'Sense contingut', title = 'Sense titol', status = false } = props.message;

  return (
    <>
      <div className="item-container box" >
        <div className="user-info has-text-centered is-hidden-tablet">
          <figure className="image avatar is-96x96 post-image">
            <img
              className="is-rounded"
              src={user.image || "https://bulma.io/images/placeholders/64x64.png"}
              alt={user.username}
            />
          </figure>
          <div className="user">{user.username}</div>
          <div className="rating">
            {`${4} / 5 `}
            <Rating
              emptySymbol="far fa-star star"
              fullSymbol="fas fa-star star"
              initialRating={4}
              readonly />
          </div>
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
                <div className="column is-paddingless rating has-text-right is-hidden-mobile">
                  {`${4} / 5 `}
                  <Rating
                    emptySymbol="far fa-star star"
                    fullSymbol="fas fa-star star"
                    initialRating={4}
                    readonly />
                </div>
              </div>
            </div>
            <p>{text}</p>
          </div>
          {!status && <>&nbsp;&nbsp;<span className="tag is-warning">Pendent..</span></>}
          {/* {status && <>&nbsp;&nbsp;<span className="tag is-success">Acceptat</span></>}
          {!status && <>&nbsp;&nbsp;<span className="tag is-danger">Declinat</span></>} */}
        </article>
      </div >


    </>
  )
}
