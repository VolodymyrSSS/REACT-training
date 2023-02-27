import React from 'react';

// a stateful component
class SecondsRunner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 }; // component maintains internal state data, accessed via this.state
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // When a component’s state data changes, the rendered markup will be updated by re-invoking render
  render() {
    return (
      <h2>Seconds: {this.state.seconds}</h2>
    );
  }
}

export default SecondsRunner;