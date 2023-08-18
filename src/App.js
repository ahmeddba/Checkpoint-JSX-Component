import React from 'react';
import './App.css';
import Navbar from './NavBar/Navbar'
import About from './About/About';
import Skills from './Skills/Skills';
import Exp from './Experience/Exp';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
<Navbar />
<About />
<Skills />

<Exp />

<Footer />
    </div>
  );
}

export default App;
