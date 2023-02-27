import React from 'react';

/* Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions. */

const styles = {
  FancyBorder: {
    padding: '10px 10px',
    border: '5px solid'
  },
  FancyBorderRed: {
    borderColor: 'red'
  },
  DialogTitle: {
    margin: 0,
    fontFamily: 'sans-serif'
  },
  DialogMessage: {
    fontSize: 'larger'
  }
}

const red = 'Red';

/* In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props.*/

function FancyBorder(props) {
  return (
    <div style={{...styles.FancyBorder, ...styles['FancyBorder' + red]}} >
      {props.children}
    </div>
  );
}


function Dialog(props) {
  return (
    <FancyBorder color="red">
      <h1 style={styles.DialogTitle}>
        {props.title}
      </h1>
      <p style={styles.DialogMessage}>
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}


class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog 
        title="Mars Exploration Program"
        message="How should we refer to you?">
        <input value={this.state.login}
        onChange={this.handleChange} 
        />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

export default SignUpDialog;
