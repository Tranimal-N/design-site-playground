import React from 'react';
import NavBar from './components/nav-bar/NavBar';
import Home from './components/home/Home';
import Resources from './components/resources/Resources';
import DesignSprint from './components/design-sprint/DesignSprint'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/design-sprint" element={<DesignSprint/>}/>
          </Routes>
        </BrowserRouter>

      </div>
    </>

  );
}

export default App;
