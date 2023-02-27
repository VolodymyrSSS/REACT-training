import React from 'react';

const styles = {
  // FancyBorder: {
  //   padding: '10px 10px',
  //   border: '5px solid'
  // },
  FancyBorderBlue: {
    padding: '10px 10px',
    border: '5px solid',
    borderColor: 'blue'
  },
  DialogTitle: {
    margin: 0,
    fontFamily: 'sans-serif'
  },
  DialogMessage: {
    fontSize: 'larger'
  }
}

/* <FancyBorder> component doesn’t know their children ahead of time. Such component use the special children prop to pass children elements directly into it's output. */

function FancyBorder(props) {
  return (
    <div style={styles['FancyBorder' + props.color]} >
      {props.children}
    </div>
  );
}

// Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop.
function WelcomeDialog() {
  return (
    <FancyBorder color="Blue">
      <h1 style={styles.DialogTitle} >
        Welcome
      </h1>
      <p style={styles.DialogMessage} >
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

export default WelcomeDialog;
