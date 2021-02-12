import React from 'react';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // if you need multiple managed input elements, you can assign a name attribute to each of them
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // we use computed property names to update the value in state via a key that matches the name attribute of the input element
    this.setState({
      [name]: value
    });

    // Идентичный ES5-код:
    // var partialState = {};
    // partialState[name] = value;
    // this.setState(partialState);
  }

  render() {
    return (
      <form>
        <label>
          Will go:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }

}

export default Reservation;