
import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import storage from '../../../../services/firebase-service';
import { handleUpdateUser } from '../../../../store/user/actions';

import './userImage.css';

const UserImage = props => {
  const { user: { username, image }, isEditting, user } = props;
  const defaultImage = 'https://bulma.io/images/placeholders/128x128.png';
  const [pr, setPr] = useState(0);
  const [url, setUrl] = useState(undefined);
  const { token } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => console.log(`${pr}%`), [pr]);

  useEffect(() => {
    if (url) dispatch(handleUpdateUser({ ...user, image: url }, token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const handlePush = () => {
    inputRef.current.click();
  }

  const handleChange = ({ target }) => {
    if (target.files[0]) {
      const inputFile = target.files[0];
      const image = `${uuidv4()}.${inputFile.name.split(".").pop()}`;
      const upload = storage.ref(`images/${image}`).put(inputFile);
      setPr(1);

      upload.on("state_changed",
        snapshot => setPr(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)),
        () => setUrl(defaultImage),
        async () => {
          setUrl(await storage.ref('images').child(image).getDownloadURL())
          setPr(0);
        }
      );
    }
  }

  return (
    <div className="userImage-wrapper separate has-text-centered">
      <figure className="image avatar is-128x128">
        <img
          className="is-rounded"
          src={image || defaultImage}
          alt={username}
        />
      </figure>
      <input ref={inputRef} onChange={handleChange} type="file" name="userImage" className="userImage-input" />
      {isEditting &&
        <button onClick={handlePush} className={`${pr > 0 ? 'is-loading' : ''} button form-button button-text userImage-button`}>
          <span className="icon">
            <i className="fas fa-pen" />
          </span>
        </button>
      }
    </div>
  )
}

UserImage.propTypes = {
  isEditting: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default UserImage;
