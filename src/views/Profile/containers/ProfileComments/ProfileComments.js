import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Spinner from '../../../../components/Spinner/Spinner';
import Comment from './Comment/Comment';

import commentsService from '../../../../services/comments-service';

import './ProfileComments.css';

export default function ProfileComments(props) {
  const textareaRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const { token } = useSelector(({ user }) => user);
  const { id: userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const { readOnly, post } = props;

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await commentsService.getCommentsByUserId(userId, token);

      if (response.status === 200) {
        const messages = await response.json();
        setMessages(messages.messages);
      }

      setLoading(false);
    })();
  }, [userId, token]);

  const submitHandler = async event => {
    event.preventDefault();

    const comment = {
      title: titleRef.current.value,
      message: textareaRef.current.value
    };

    const response = await commentsService.postCommentByUserId(
      comment,
      token,
      userId
    );

    if (response.status === 200) {
      const data = await response.json();

      textareaRef.current.value = '';
      titleRef.current.value = '';

      setMessages([...messages, data.newMessage]);
    }
  };

  const inputsHandler = () => {
    buttonRef.current.disabled =
      titleRef.current.value.length > 0 && textareaRef.current.value.length > 0
        ? false
        : true;
  };

  const statusUpdateHandler = async event => {
    const messageId = event.currentTarget.id;
    const status = event.currentTarget.getAttribute('name') === 'accept';
    const ind = event.currentTarget.getAttribute('ind');

    const response = await commentsService.updateCommentByMessageId(
      messageId,
      status,
      token
    );
    if (response.status === 200) {
      let newMessages = [...messages];
      newMessages[ind].status = status;
      setMessages(newMessages);
    }
  };

  const getMessages = () => {
    if (loading)
      return (
        <div className="comments-wrapper">
          <Spinner />
        </div>
      );

    if (messages.length === 0) return <p>No hi ha cites.. Sigues el primer!</p>;
    return messages.map((message, index) => (
      <Comment
        key={index}
        ind={index}
        message={message}
        readOnly={readOnly}
        statusUpdateHandler={statusUpdateHandler}
        post={post}
      />
    ));
  };

  return (
    <>
      {getMessages()}
      <hr />
      <form onSubmit={submitHandler}>
        <div className="field">
          <label className="label">Titol</label>
          <div className="control">
            <input
              ref={titleRef}
              onChange={inputsHandler}
              className="input"
              type="text"
              placeholder="Titol"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              ref={textareaRef}
              onChange={inputsHandler}
              className="textarea"
              placeholder="Missatge"
            ></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              disabled={true}
              type="submit"
              ref={buttonRef}
              className="button is-link"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
