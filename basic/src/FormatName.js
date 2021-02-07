import React from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Tudor',
  lastName: 'Rambler'
};

const element = (
  <h2>
    Bonjour, {formatName(user)}!
  </h2>
);

export default element;