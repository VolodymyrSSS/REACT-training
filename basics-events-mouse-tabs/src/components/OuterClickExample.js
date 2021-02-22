import React from 'react';

class OuterClickExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  onClickOutsideHandler(event) {
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
      <div ref={this.toggleContainer}>
        <button className="btn-option" onClick={this.onClickHandler}>Select an option</button>
        <button className="btn-option" onClick={this.onClickHandler}>Load the option</button>
        <button className="btn-option" onClick={this.onClickHandler}>Remove the option</button>
        {this.state.isOpen && (
          <ul>
            <li className="selected-option">Option 1</li>
            <li className="selected-option">Option 2</li>
            <li className="selected-option">Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}

export default OuterClickExample;
