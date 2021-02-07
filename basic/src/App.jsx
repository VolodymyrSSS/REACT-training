import React from 'react';

import Comment from './Comment';

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

  // function tick() {
  //   const element = (
  //     <div>
  //       <h1>Hello, world!</h1>
  //       <h2>It is {new Date().toLocaleTimeString()}.</h2>
  //     </div>
  //   );
  //   ReactDOM.render(element, document.getElementById('root'));
  // }

  return (
    <div className="container">
      <h1>Hello, {name}!</h1>,
      <h2>Bonjour, {formatName(user)}!</h2>
      <h3>Hello React, it is {new Date().toLocaleTimeString()}.</h3>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  )

}

export default App;
