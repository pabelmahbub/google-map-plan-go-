import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Direction from './components/Direction';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  return (
    <div className="App">
      
      <nav class="navbar navbar-light  bg-success text-white">
  <div class="container-fluid">
    <a class="navbar-brand class" href="#">
      
      Plan & Go
    </a>
  </div>
</nav>
       



      <input className="text-secondary m-1 font-monospace" type="text" placeholder="MY PLACE" onBlur={e => setOrigin(e.target.value)}/>
      <br/>
      <input className="text-secondary mb-1 font-monospace" type="text" placeholder="GOING TO" onBlur={e => setDestination(e.target.value)}/>
      <br/>
      <Direction origin={origin} destination={destination}></Direction>
      
    </div>
  );
}

export default App;