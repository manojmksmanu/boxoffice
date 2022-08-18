import React from 'react'

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route path='/hello' element={<div>hello world</div>}/>
 <Route path='/helo' element={<div>How are you</div>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
