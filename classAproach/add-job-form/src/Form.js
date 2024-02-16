import React, { Component } from 'react';

class Form extends Component {
  // Previously, it was necessary to include a constructor() on React class components, but it's not required anymore.
  initialState = {
    name: '',
    job: '',
  };

  state = this.initialState;

  submitForm = () => {
    this.props.handleSubmit(this.state); // that will call that function, and pass the Form state through
    this.setState(this.initialState); // reset the state to the initial state, to clear the form after submit
  };

  // function that will run every time a change is made to an input
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job Title</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
