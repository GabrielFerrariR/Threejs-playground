import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css';
import Background from './components/Background';

function App() {

  return (
    <>
      <Background/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={ <Contact/> }/>
        <Route exact path="/projects" element={ <Projects/> }/>
        <Route exact path="/teste" />
      </Routes>
    </>
  )
}

export default App;
