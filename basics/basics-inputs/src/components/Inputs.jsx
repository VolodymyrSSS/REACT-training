import {useState} from 'react';

export default function Inputs () {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [formData, setFormData] = useState({name: "", age: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, age);
    console.log(formData);
  }

  const handleChange = (e) => {
    // if (e.target.name === "name") {
    //   setName(e.target.value);
    // }
    // if (e.target.name === "age") {
    //   setAge(e.target.value);
    // }

    setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  /* Here, the attributes were used:
    "autocomplete" (autoComplete for React)- the browser automatically complete values based on values that the user has entered before;
    "for" (htmlFor for React) attribute of the "label" tag should be equal to the "id" attribute of the input element to bind them together;
    "required" - specifies that an input field must be filled out before submitting the form;
    "autofocus" (autoFocus for React) - specifies that an input field should automatically get focus when the page loads;
  */
  return (
    <form autoComplete="on" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        autoFocus
        required
        type="text"
        id="name"
        name="name"
        // value={name}
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="age">Age:</label>
      <input
        required
        type="text"
        id="age"
        name="age"
        // value={age}
        value={formData.age}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}