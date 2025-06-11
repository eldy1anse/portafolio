import { FiHome, FiUser, FiFolder, FiMail } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav
      className="w-full shadow-md p-4 fixed top-0 z-50"
      style={{
        backgroundColor: 'var(--color-navbar)',
        color: 'var(--color-navbar-texto)',
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex gap-6 justify-center">
          <li>
            <a
              href="#inicio"
              className="flex items-center gap-1 font-semibold hover:underline"
              style={{ color: 'var(--color-navbar-texto)' }}
            >
              <FiHome className="text-lg" />
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobremi"
            className="flex items-center gap-1 font-semibold hover:underline"
            style={{ color: 'var(--color-navbar-texto)' }}>
              <FiUser className="text-lg" />
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#proyectos"
            className="flex items-center gap-1 font-semibold hover:underline"
            style={{ color: 'var(--color-navbar-texto)' }}>
              <FiFolder className="text-lg" />
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto"
            className="flex items-center gap-1 font-semibold hover:underline"
            style={{ color: 'var(--color-navbar-texto)' }}>
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



