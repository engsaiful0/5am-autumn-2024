import React from 'react';

const Operators = () => {
  const num1 = 10;
  const num2 = 20;

  const sum = num1 + num2;  // Addition
  const isEqual = num1 === num2;  // Comparison (Strict equality)
  const isGreater = num1 > num2;  // Greater than comparison

  return (
    <div>
      <p>Sum of {num1} and {num2} is: {sum}</p>
      <p>Are {num1} and {num2} equal? {isEqual ? "Yes" : "No"}</p>
      <p>Is {num1} greater than {num2}? {isGreater ? "Yes" : "No"}</p>
    </div>
  );
};

export default Operators;
