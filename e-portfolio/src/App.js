import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Projet from './pages/Projet';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  return (

    <BrowserRouter>
      <div className="App">
      <Header/>
        <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/projet/:id" element={<Projet/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
        </main> 
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
