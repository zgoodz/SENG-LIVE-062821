import { useState, useEffect } from 'react';
import './App.css';
import Login from './Components/Login'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/auth").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogin(user) {
    setUser(user)
  }

  return (
    <div className="App">
      <Login onLogin={onLogin} />
    </div>
  );
}

export default App;
