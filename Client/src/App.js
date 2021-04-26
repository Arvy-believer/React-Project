import React from 'react';
import './App.css';
import Home from "./Home";
import Login from './Login';
import verify from './verify';
import { Route, Link } from 'react-router-dom';

function App() {
  return ( 
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/verify" component={verify} />

    </div>
  );
}

export default App;