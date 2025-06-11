import './App.css';
import Navbar from './components/Navbar';
import Inicio from './sections/Inicio';
import About from './components/About';
import Proyectos from './components/Proyectos';
import Contactos from './components/Contacto';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      <Navbar />
      <Inicio />
      <About />
      <Proyectos />
      <Contactos />
    </div>
  );
}

export default App;
