import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '12px',
      borderBottom: '2px solid #ccc',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
    // if(this.props.todo.completed) {
    //   return {
    //     textDecoration: 'line-through'
    //   }
    // } else {
    //   return {
    //     textDecoration: 'none'
    //   }
    // }
  }

  // markComplete(event) { 
    // можна використовувати => і тоді не потрібен .bind(this)
  //   console.log(this.props);
  // }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' 
            onChange={this.props.markComplete.bind(this, this.props.todo.id)} />{' '}
          { this.props.todo.title }
          <button style={btnStyle} 
            onClick={this.props.delTodo.bind(this, this.props.todo.id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
