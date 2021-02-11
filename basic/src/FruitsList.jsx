import React from 'react';

// Simple List Component
function FruitsList(props) {
  const fruits = props.fruits;
  // Keys help React determine which elements have been changed, added, or removed
  // These need to be specified so that React can match array elements over time
  const fruitsItems = fruits.map((fruit, index) =>
    <li key={index.toString()}>{index + 1} {fruit}</li>
  );
  return (
    <ul>
      {fruitsItems}
      <hr />
    </ul>
  );
}

export default FruitsList;