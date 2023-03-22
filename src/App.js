import React from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Pricing from './routes/pricing';
import Home from './routes/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route index={true} element={<Home/>}/>
        <Route path='pricing' element={<Pricing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
