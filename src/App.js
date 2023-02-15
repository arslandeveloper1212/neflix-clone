import React from 'react';
import "./App.css"


// import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './HomeScreen';
import { Routes, Route } from "react-router-dom";

import Login from './Login';

function App() {
  const user = null;
  return (

    <div className='apphit'>
      <Routes>
        {!user ? (
         
            <Route path='/login' element={<Login />} />
        
        ) : (
         
          <Route path='/' element={<HomeScreen />} />
        
        )}

      </Routes>

    </div>



  );
}

export default App;
