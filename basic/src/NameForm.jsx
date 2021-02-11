import React from 'react';

// it is more convenient to process the form using a JavaScript function that has access to the entered data

// in a managed component, the value of the input field is always determined by the state of the React

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}; // the value attribute for the input field - it will always display the value of this.state.value

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // each key press calls handleChange, which updates the state of the React component
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('it was sent the name: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          The name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default NameForm;
