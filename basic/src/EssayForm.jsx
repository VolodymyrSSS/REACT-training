import React from 'react';

// In React, <textarea> uses the value attribute. Thus, a form with a <textarea> can be written in much the same way as a form with a one-line <input>

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    // we initialized this.state.value in the constructor so that the text area initially has text
    this.state = {
      value: 'Please write an essay about your favorite DOM-element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Essay sent: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          The essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default EssayForm;