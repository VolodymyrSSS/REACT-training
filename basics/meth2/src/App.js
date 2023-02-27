import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  // data is officially contained in the state
  state = {
    characters : [],
  }

  // to be able to remove a character from the table
  removeCharacter = (index) => {
    const {characters} = this.state // to retrieve the state, we'll get this.state.characters
  
    // to update the state - a built-in method for manipulating state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  // update the state by taking the existing this.state.characters and adding the new character parameter
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
