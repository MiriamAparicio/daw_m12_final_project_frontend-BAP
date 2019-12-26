import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Spinner from '../../../../components/Spinner/Spinner';
import Comment from './Comment/Comment';

import './styles.css';

export default function ProfileComments() {
  const textareaRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const url = 'http://localhost:3000/posts/messages/'
  const { token } = useSelector(({ user }) => user);

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(`${url}${id}`, {
        headers: { 'Content-Type': 'application/json', 'access-token': token }
      });
      if (response.status === 200) {
        const messages = await response.json();
        setMessages(messages.messages);
      }
      setLoading(false);
    })();
  }, [id, token]);

  const submitHandler = async event => {
    event.preventDefault();
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ title: titleRef.current.value, message: textareaRef.current.value, userId: id }),
      headers: { 'Content-Type': 'application/json', 'access-token': token }
    });

    if (response.status === 200) {
      const data = await response.json();
      textareaRef.current.value = '';
      titleRef.current.value = '';
      setMessages([...messages, data.newMessage]);
    }
  }

  const inputsHandler = () => {
    buttonRef.current.disabled = titleRef.current.value.length > 0 && textareaRef.current.value.length > 0 ? false : true;
  }

  const getMessages = () => {
    if (loading) return (
      <div className="comments-wrapper">
        <Spinner />
      </div>
    )

    if (messages.length === 0) return <p>No hi ha cites.. Sigues el primer!</p>;

    return messages.map((message, index) => <Comment key={index} message={message} />);
  }

  return (
    <>
      {getMessages()}
      <hr />
      <form onSubmit={submitHandler}>

        <div className="field">
          <label className="label">Titol</label>
          <div className="control">
            <input ref={titleRef} onChange={inputsHandler} className="input" type="text" placeholder="Titol" />
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea ref={textareaRef} onChange={inputsHandler} className="textarea" placeholder="Missatge"></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button disabled={true} type="submit" ref={buttonRef} className="button is-link">Submit</button>
          </div>
        </div>

      </form>
    </>
  )
}
