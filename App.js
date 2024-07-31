import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import ConferenceDetails from './ConferenceDetails';
import Sessions from './Sessions';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <ConferenceDetails />
      <Sessions />
      <Footer />
    </div>
  );
};

export default App;
