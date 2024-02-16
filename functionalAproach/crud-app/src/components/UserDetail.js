import React from 'react';

// This component will show the details of a single user.
function UserDetail({ user }) {
  return (
    <div>
      <h2>User Detail</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {[user.address.street, user.address.suite, user.address.city, user.address.zipcode]}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default UserDetail;
