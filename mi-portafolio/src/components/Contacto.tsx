import { FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundColor: 'var(--color-secundario)',
        color: 'var(--color-texto)',
      }}
    >
      <div className="max-w-3xl text-center space-y-6">
        {/* Título con animación de fade-up */}
        <h2
          className="text-3xl font-bold"
          data-aos="fade-up"
        >
          Contacto
        </h2>

        {/* Lista con animaciones escalonadas */}
        <ul className="space-y-4 text-lg text-left">
          <li
            className="flex items-center gap-2"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <FiMail className="text-blue-400 text-xl" />
            <a
              href="mailto:suazoescobar.dylanignacio@gmail.com"
              className="hover:underline"
            >
              suazoescobar.dylanignacio@gmail.com
            </a>
          </li>

          <li
            className="flex items-center gap-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaWhatsapp className="text-green-400 text-xl" />
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              +56 9 1234 5678
            </a>
          </li>

          <li
            className="flex items-center gap-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FiMapPin className="text-red-400 text-xl" />
            Concepción, Chile
          </li>
        </ul>
      </div>
    </section>
  );
}


