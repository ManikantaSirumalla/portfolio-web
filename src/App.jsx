import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Header 
        activeSection="home" 
        scrollToSection={(id) => console.log(id)} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
      />
      <Hero id="home" />
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
