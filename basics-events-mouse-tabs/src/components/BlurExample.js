import React from 'react';

class BlurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  /*  Мы закрываем выпадающий список по таймеру setTimeout.
   Это нужно чтобы для дочерних элементов событие выделения
  происходило перед событием получения фокуса. */ 
  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    });
  }
  // Не закрывать выпадающий список при получении фокуса дочерним элементом.
  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }
  render() {
    /* React помогает нам благодаря всплытию потери фокуса и
    фокусировке событий на родителе. */
    return (
      <div onBlur={this.onBlurHandler}
           onFocus={this.onFocusHandler}>
        <button className="btn-option" onClick={this.onClickHandler} aria-haspopup="true"
          aria-expanded={this.state.isOpen}>
          Select an option
        </button>
        <button className="btn-option" onClick={this.onClickHandler} aria-haspopup="true"
          aria-expanded={this.state.isOpen}>
            Load the option
        </button>
        <button className="btn-option" onClick={this.onClickHandler} aria-haspopup="true"
          aria-expanded={this.state.isOpen}>
            Remove the option
        </button>
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

export default BlurExample;
