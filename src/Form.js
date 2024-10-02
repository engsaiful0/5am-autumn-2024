import React, { useState } from 'react';

function Form() {
  // Declare a state variable "name" with initial value as an empty string
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);  // Update the state with the new input value
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name: ${name}`);  // Display the current value of "name"
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleInputChange}  // Set input change to update the state
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
