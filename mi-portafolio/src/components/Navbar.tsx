import { FiHome, FiUser, FiFolder, FiMail } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md p-4 fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex gap-6 justify-center">
          <li>
            <a href="#inicio" className="flex items-center gap-1 text-blue-600 font-semibold hover:underline">
              <FiHome className="text-lg" />
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobremi" className="flex items-center gap-1 text-blue-600 font-semibold hover:underline">
              <FiUser className="text-lg" />
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#proyectos" className="flex items-center gap-1 text-blue-600 font-semibold hover:underline">
              <FiFolder className="text-lg" />
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" className="flex items-center gap-1 text-blue-600 font-semibold hover:underline">
              <FiMail className="text-lg" />
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

