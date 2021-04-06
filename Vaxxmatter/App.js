import React from 'react';
import './App.css';
import Home from "./Home";
import Login from './Login';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home />
      <Route exact path="/login" component={Login} />

    </div>
  );
}

export default App;