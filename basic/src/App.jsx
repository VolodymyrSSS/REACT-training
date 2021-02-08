import React from 'react';

import Clock from './Clock';
import Comment from './Comment';
import ToggleBtn from './ToggleBtn';

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

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  return (
    <div className="container">
      <h1>Hello, {name}!</h1>,
      <h2>Bonjour, {formatName(user)}!</h2>
      <Clock />,
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />,
      <br/>
      <ToggleBtn />
    </div>
  )

}

export default App;