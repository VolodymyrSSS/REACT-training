import React from 'react';

function FormattedDate(props) {
  return <h3>Now, it is {props.date.toLocaleTimeString()}.</h3>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // lifecycle methods:

  // runs after the component has rendered to the DOM
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // runs every time when a DOM node, created by a component, is removed
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // starts by timer every second and calls this.setState
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>Hello, WORLD!</h2>
        {/* <h3>Now, it is {this.state.date.toLocaleTimeString()}.</h3> */}
        {/* // top-down or unidirectional data stream */}
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default Clock;