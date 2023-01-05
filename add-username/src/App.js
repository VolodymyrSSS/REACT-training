import React, { useState } from 'react';

import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

function App() {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]); // appends a user to the array
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id)); // filters a user out by ID
    setEditing(false); // can delete a user while it is currently being edited
  };

  const [editing, setEditing] = useState(false); // to make state for whether or not edit mode is turned on
  const initialFormState = { id: null, name: '', username: '' }; //Since we don't know who is being edited until it's selected, we'll create initial empty state for the form
  const [currentUser, setCurrentUser] = useState(initialFormState); // to see and update who the current user being edited is, so we'll apply that empty user to a currentUser state

  // when edit is selected on a user, it should turn on edit mode, and set the current user
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username }); // it will be pre-populated with the data from the selected user
  };

  // the actual function that will get called when the edit form is submitted
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    // to map through the array, and update the user that matches the ID passed through
    setUsers(users.map((user) => (user.id === id ? updatedUser : user))); // to map through the users and find the one we want to update
  };

  return (
    <div className="container">
      <h1>Add user name CRUD-App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            // a toggle for displaying the add or edit form
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
