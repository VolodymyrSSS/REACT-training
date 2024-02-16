import React from 'react';
import InputForm from './InputForm';

// This component will provide an interface to edit user information.
function UserEdit({ user, updateUser }) {
  return (
    <div>
      <h2>Edit User</h2>
      <InputForm initialData={user} updateUser={updateUser} />
    </div>
  );
}

export default UserEdit;
