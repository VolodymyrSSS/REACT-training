import React from 'react';

import HelloMessage from './HelloMessage';
import SecondsRunner from './SecondsRunner';
import Comment from './Comment';
import Clock from './Clock';
import ToggleBtn from './ToggleBtn';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import WarningPage from './WarningPage';

import './App.css';

function App() {
  const name = 'Modest';

  const user = {
    firstName: 'Tudor',
    lastName: 'Rambler'
  };

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

  const messages = ['React', 'Re: React', 'Re:Re: React'];

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  return (
    <div className="container">
      <h1>Hello, {name}!</h1>
      <h2>Bonjour, {formatName(user)}!</h2>
      <HelloMessage name="Ellis"/>
      <SecondsRunner />
      <br/>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <br/>
      <Clock />
      <ToggleBtn />
      <LoginControl />
      <Mailbox unreadMessages={messages} />
      <WarningPage />

    </div>
  )

}

export default App;
