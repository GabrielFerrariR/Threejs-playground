import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css';

function App() {

  return (
      <Routes>
        <Route exact path="/" element={<Home></Home>}/>
        <Route exact path="/contact" component={ Contact }/>
        <Route exact path="/projects" component={ Projects }/>
      </Routes>
  )
}

export default App;
