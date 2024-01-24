import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import './App.css';
import Lalibela from './Components/Lalibela';
import Things from './Components/Things';
import PopularSlideshow from './Components/Home';
import Places from './Components/Places';
import About from './Components/About';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path="/register" element={<Register setAuthenticated={setAuthenticated} />} />
          <Route path="/Things" element={<Things />}/>
          <Route path="/Home" element={<PopularSlideshow />}/>
          <Route path='/Lalibela' element={<Lalibela />} />
          <Route path='/places' element={<Places />} />
          <Route path='/About' element={<About />} />

         
              <Route path="/" element={<Navigate to="/home" />} />
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;