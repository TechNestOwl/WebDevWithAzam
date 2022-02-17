import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState([]);

  const handleDecrement = () => {
    setCount(count - 1)
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
      // console.log(result.data)

    });
  }

  const users = users.map(user =>{
    return <li>user.email</li>})



  

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick = {handleDecrement}> - </button>
      <h3>{count}</h3>
      <button onClick = {handleIncrement}> + </button>

      {/* use Hooks to load data from a url. Display user information on the screen */}
      <h1>Using Hooks</h1>
      {/* <p>{userInfo.data.email}</p>
      <p>{userInfo.data.first_name}</p> */}
    </div>
  );
}

export default App;
