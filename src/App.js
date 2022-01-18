import React from 'react';
import './App.css';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import Header from './components/Header';

function App() {


  return (
    <div className='App'>
     <Header title="Amazon Cart" />
      <div className='App-main'>
        <CartItems />
        <CartTotal />
      </div>
    </div>
  )
}

export default App;
