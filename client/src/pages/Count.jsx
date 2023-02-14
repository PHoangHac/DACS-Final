import React, { useState } from "react";

const Count = () => {
  // State to store count value
  const [count, setCount] = useState(0);

  console.log(count);
  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  return (
    <div className="app">
      <button onClick={incrementCount}>Click Here</button>
      {count}
    </div>
  );
};

export default Count;
