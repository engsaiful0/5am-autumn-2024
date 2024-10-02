import React, { useState } from 'react';

function ToggleButton() {
  // Declare a state variable "isOn" with an initial value of false
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      {/* Button text changes based on the state */}
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>

      <p>The button is {isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
}

export default ToggleButton;
