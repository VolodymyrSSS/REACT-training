import React, { useState } from 'react';

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '' };
  const [user, setUser] = useState(initialFormState);

  // event always gets passed through to any on event in the DOM, so that is taken as the parameter of the function
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // prevent the default form submission from firing
        if (!user.name || !user.username) return; // validation to make sure empty values cannot be submitted

        props.addUser(user); // use props to access the 'addUser' function
        setUser(initialFormState); // using the setter to reset the form to its initial value after successful submission
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
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
