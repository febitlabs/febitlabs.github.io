import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import {Dashboard} from './Components';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
