import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Logout from './components/Auth/Logout/Logout';
import Home from './components/Home/Home';

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div>
      {token? <Logout setToken={setToken} /> : ''}
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;