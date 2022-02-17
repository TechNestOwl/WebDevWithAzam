import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1)
  };
  const handleIncrement = () => {
    setCount(count + 1)
    console.log("increment")
  };
  

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick = {handleDecrement}> - </button>
      <h3>{count}</h3>
      <button onClick = {handleIncrement}> + </button>
    </div>
  );
}

export default App;
