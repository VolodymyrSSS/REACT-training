import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  // onChange = (event) => this.setState({ title: event.target.value });
  onChange = (event) => this.setState({ [event.target.name]:event.target.value });

  render() {
    return (
      <form style={{ display: 'flex'}} onSubmit={this.onSubmit}>
        <input 
          type='text' 
          name='title' 
          placeholder='Add todo ...'
          style={{ flex:'10', padding: '5px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type='submit' 
          value='Submit'
          className='btn'
          style={{ flex:'1' }}
        />

      </form>
    )
  }
}

export default AddTodo
