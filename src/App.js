
import React, { Component } from 'react';

import Header from './Header';
import Calculator from './Cacculator/Calculator';

import './App.css';

function App() {

  return (

    <div id="Test">

      <Header />
      <Calculator heading="Hello This Is Prop" />

    </div>

  );
}

export default App;
