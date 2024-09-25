import React from 'react';

const Datatype = () => {
  const name = "Alice";             // String
  const age = 25;                   // Number
  const isLoggedIn = true;          // Boolean
  const hobbies = ["Reading", "Music", "Coding"]; // Array
  const user = { name: "Alice", age: 25 }; // Object

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>User Info: {user.name}, {user.age}</p>
    </div>
  );
};

export default Datatype;
