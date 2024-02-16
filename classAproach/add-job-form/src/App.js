import React, { Component } from 'react';

import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: [],
  };

  // to update the state
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
    // simply applying a new value to this.state.property will not work
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <h2>Add job title application</h2>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
