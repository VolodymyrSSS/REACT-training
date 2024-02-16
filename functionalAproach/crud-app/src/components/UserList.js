import React from 'react';

// This component will display the list of users and provide options to view, edit, and delete.
function UserList({ users, viewUser, editUser, deleteUser }) {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-data">
            {user.name}
            <button onClick={() => viewUser(user)}>View</button>
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
