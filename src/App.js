import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Header from './components/Header/Header';
import Projet from './pages/Projet';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  const isHome = useMatch("/");
  const isContact = useMatch("/contact");
  

  return (
    
      <div className="App">
      {!isHome && !isContact && <Header />}
        <main>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/projet/:id" element={<Projet />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </ErrorBoundary>
        </main>
        {!isHome && <Footer />} 
      </div>
   
  );
}

export default App;
