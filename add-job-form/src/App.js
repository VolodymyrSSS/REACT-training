import React, { Component } from 'react';
import Table from './Table';

//we're loading the Component as a property of React, so we no longer need to extend React.Component
class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    );
  }
}

export default App;
