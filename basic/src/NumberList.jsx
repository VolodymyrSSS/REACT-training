import React from 'react';

function ListItem(props) {
  // wrong! No need to set a key here
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const sampleNumbers = props.sampleNumbers;
  const listItems = sampleNumbers.map((number) =>
    // the key needs to be defined here!
    <ListItem key={sampleNumbers.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
  // // JSX allows you to embed any expression in curly braces
  // const sampleNumbers = props.sampleNumbers;
  // return (
  //   <ul>
  //     {numbers.map((number) =>
  //       <ListItem key={number.toString()}
  //                 value={number} />
  //     )}
  //   </ul>
  // );
}

export default NumberList;