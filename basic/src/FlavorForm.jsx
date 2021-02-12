import React from 'react';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'}; // React замість атрибута selected використовує this.state.value

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite taste: ' + this.state.value);
    event.preventDefault();
  }
  // React uses value in the root select tag instead of the selected attribute, because you have to update the value in one place - state
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Choose your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default FlavorForm;