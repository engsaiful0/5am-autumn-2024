
import React, { useState } from 'react';

function StateManagement() {
  // Declare a state variable "count" and a function to update it "setCount"
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>State Management</h1>
      <h1>Counter: {count}</h1>
      {/* Update the state using setCount on button click */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default StateManagement;
