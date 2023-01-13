import React from 'react';
import ItemsList from './ItemsList';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className="glassContainer">
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <h3 style={{ marginTop: '2rem' }}>Your list is empty.</h3>
      )}
    </main>
  );
};

export default Content;
