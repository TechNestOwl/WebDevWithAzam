import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState([]);

  const handleDecrement = () => {
    setCount(count - 1)
    console.log('decrement')
  };
  const handleIncrement = () => {
    setCount(count + 1)
    console.log("increment")
  };

  useEffect(() => {
    getUserData();
  },[]);

  const getUserData = () => {
    fetch("https://reqres.in/api/users?page=2")
    .then(response => response.json())
    .then(result => {
      console.log(result.data)
      setUserInfo(result.data)
    });
  }

  const user = userInfo.map( user => {
    return <li key = {user.id}>
      {user.first_name},{user.email}
      <img  src={user.avatar} alt="User Avatar"/>
      </li>
  })
  

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick = {handleDecrement}> - </button>
      <h3>{count}</h3>
      <button onClick = {handleIncrement}> + </button>

      {/* using hook to load data from a url and display user information on the screen */}
      <h1>Using Hooks</h1>
      <div>
        <h3>List of users:</h3>
        <ul>
          {user}
        </ul>
      </div>
    </div>
  );
}

export default App;
