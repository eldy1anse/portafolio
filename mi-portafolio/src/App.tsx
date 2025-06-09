import './App.css';
import Navbar from './components/Navbar';
import Inicio from './sections/Inicio';
import About from './components/About';
import Proyectos from './components/Proyectos';

function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      <Navbar />
      <Inicio />
      <About />
      <Proyectos />
    </div>
  );
}

export default App;
