import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
