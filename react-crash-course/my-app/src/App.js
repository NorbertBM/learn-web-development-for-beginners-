import "./App.css";
import Welcome from "./components/Welcome";
import React, { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);

  const items = ["A", "B", "C", "D"];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds((s) => s + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  console.log(items);
  return (
    <div className="App">
      {/* <h1>Hello, world!</h1>{" "} */}
      <Welcome message="Norbert from React" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>count</button>
      <p>Time: {seconds}s</p>

      {/* {isLoggedIn ? <Dashboard /> : <Login />} */}
      {hasAccess && <AdminPanel />}

      {/* <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button> */}
      <button onClick={() => setHasAccess(!hasAccess)}>Toggle Access</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

const Dashboard = () => <h1>Dashboard</h1>;
const Login = () => <h1>Login</h1>;
const AdminPanel = () => <h1>AdminPanel</h1>;
