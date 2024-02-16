import React, { useState } from 'react';


//This component will be used for both creating and updating users.
function InputForm({ addUser, updateUser, initialData }) {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
    setFormData({ id: '', name: '', email: '', address: '', phone: '' });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="name">Name:</label>
          </div>
          <div className="col-75">
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your full name like John Dou" 
              value={formData.name} 
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Email:</label>
          </div>
          <div className="col-75">
            <input 
              type="email" 
              id="email" 
              name="email"
              placeholder="Your email like: shanna_mock@example.com" 
              value={formData.email} 
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="address">Address:</label>
          </div>
          <div className="col-75">
            <input 
              type="text" 
              id="address" 
              name="address"
              placeholder="Your address like: Victor Plains 25, apt.144, Wisokyburgh, 92536-4271" 
              value={formData.address} 
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="phone">Phone:</label>
          </div>
          <div className="col-75">
            <input 
              type="text" 
              id="phone" 
              name="phone"
              placeholder="Your phone like: 1-770-736-8031" 
              value={formData.phone} 
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
