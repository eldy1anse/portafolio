const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md p-4 fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex gap-4 justify-center">
          <li><a href="#inicio" className="text-blue-600 font-semibold">Inicio</a></li>
          <li><a href="#sobremi" className="text-blue-600 font-semibold">Sobre mí</a></li>
          <li><a href="#proyectos" className="text-blue-600 font-semibold">Proyectos</a></li>
          <li><a href="#contacto" className="text-blue-600 font-semibold">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
