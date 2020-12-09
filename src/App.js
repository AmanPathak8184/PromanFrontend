
import React, { Component } from 'react';

import Header from './Header';

import Calculator from './Cacculator/Calculator';
import { useState } from 'react';

import './App.css';
import Paypal from './Paypal';

function App() {

  const [checkout , setCheckOut] = useState(false);

  return (

    <div className="Test">

      <Header />
      <Calculator heading="Hello This Is Prop" />
  

    </div>

  );
}

export default App;
