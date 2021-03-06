import React from 'react';

import HelloMessage from './HelloMessage';
import SecondsRunner from './SecondsRunner';
import Comment from './Comment';
import Clock from './Clock';
import SplitPane from './SplitPane';
import ToggleBtn from './ToggleBtn';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import WarningPage from './WarningPage';
import FruitsList from './FruitsList';
import NumberList from './NumberList';
import Blog from './Blog';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import BoilingWaterCalculator from './BoilingWaterCalculator';
import WelcomeDialog from './WelcomeDialog';
import SignUpDialog from './SignUpDialog';

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

  const numbers = [1, 2, 3, 4];

  const listItems = numbers.map((numbers) =>
    <li>{numbers}</li>
  );

  const fruits = ['apple', 'pear', 'plum', 'apricot']

  const sampleNumbers = [24, 36, 44, 88];

  const posts = [
    {id: 1, title: 'Абабагаламага', content: 'Це такий книжковий видавник'},
    {id: 2, title: 'Тенотчетлан', content: 'Це була столиця Iнків'},
    {id: 3, title: 'Парне молоко', content: 'Коли я пас корову, я пив парне молоко'}
  ];

  const styles = {
    Contacts: {
      width: '100%',
      height: '100%', 
      background: 'lightblue'
    },
    Chat: {
      width: '100%',
      height: '100%', 
      background: 'pink'
    }
  }

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  // React elements like <Contacts /> and <Chat /> are just objects, so you can pass them as props like any other data. There are no limitations on what you can pass as props in React.

  function Contacts () {
    return (
      <div style={styles.Contacts}></div>
    );
  }

  function Chat () {
    return (
      <div style={styles.Chat}></div>
    );
  }

  return (
    <div className="container">
      <h1>Hello, {name}!</h1>
      <hr />
      <h2>Bonjour, {formatName(user)}!</h2>
      <hr />
      <HelloMessage name="Ellis"/>
      <hr />
      <SecondsRunner />
      <hr />
      <br />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <br/>
      <hr />
      <Clock />
      <hr />
      <SplitPane left={<Contacts />} right={<Chat />}/>
      <hr />
      <ToggleBtn />
      <hr />
      <LoginControl />
      <hr />
      <Mailbox unreadMessages={messages} />
      <hr />
      <WarningPage />
      <hr />
      <ul>{listItems}</ul>
      <hr />
      <FruitsList fruits={fruits} />
      <hr />
      <NumberList sampleNumbers={sampleNumbers} />
      <hr />
      <Blog posts={posts} />
      <hr />
      <NameForm />
      <hr />
      <EssayForm />
      <hr />
      <FlavorForm />
      <hr />
      <Reservation />
      <hr />
      <BoilingWaterCalculator />
      <hr />
      <WelcomeDialog />
      <hr />
      <SignUpDialog />
      <hr />

    </div>
  )

}

export default App;
