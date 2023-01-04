import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ];

    // passing the data through to the child component 'Table'
    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
