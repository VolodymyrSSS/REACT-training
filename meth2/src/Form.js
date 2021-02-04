import React, {Component} from 'react'

class Form extends Component {
  // set the initial state of the Form
  initialState = {
    name: '',
    job: '',
  }
  // assign initial state to this.state
  state = this.initialState

  // the function runs every time a change is made to an input
  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }

  // call handleSubmit function, and pass the Form state through as the character parameter
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, job } = this.state; // get our two properties from state
  
    return (
      <form>
        {/* assign two properties as the values that correspond to the proper form keys */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
          
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} />
                
        <input type="button" value="Submit" onClick={this.submitForm} />

      </form>
    );
  }
}

export default Form;
