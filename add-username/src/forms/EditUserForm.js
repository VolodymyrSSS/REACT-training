import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {
  // it will be the same as the add form. The only difference is that we'll set the state directly from currentUser via props
  const [user, setUser] = useState(props.currentUser);

  /* to let the EditUserForm component know the props have changed when to be able to
  start editing one user, then try to switch to another user. 
  In the Effect Hook, we create a callback function that updates the user state with the new prop that's being sent through. Before, we needed to compare if (prevProps.currentUser !== this.state.currentUser), but with the Effect Hook we can just pass [props] through to let it know we're watching props */
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)} // button that switches off edit mode
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
