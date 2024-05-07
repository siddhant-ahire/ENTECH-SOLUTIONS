import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <Routes path="/" exact component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/services" component={Services} /> */}
          // Add more routes as needed
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
