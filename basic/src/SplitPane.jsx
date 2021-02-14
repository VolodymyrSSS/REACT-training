import React from 'react';

const styles = {
  SplitPane: {
    width: '60%',
    height: '100px',
    margin: 'auto'
  },
  SplitPaneLeft : {
    float: 'left',
    width: '30%',
    height: '100%'
  },
  SplitPaneRight : {
    float: 'left',
    width: '70%',
    height: '100%'
  }
}
/* In some cases you may come up with your own convention instead of using children. You can pass them as props like any other data. There are no limitations on what you can pass as props in React.*/

function SplitPane(props) {
  return (
    <div style={styles.SplitPane} >
      <div style={styles.SplitPaneLeft}>
        {props.left}
      </div>
      <div style={styles.SplitPaneRight}>
        {props.right}
      </div>
    </div>
  );
}

export default SplitPane;