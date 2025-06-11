import { FaGithub } from 'react-icons/fa';

const proyectos = [
  {
    nombre: 'Portafolio Personal',
    descripcion: 'Sitio web estilo landing page que muestra mis habilidades y proyectos.',
    link: 'https://github.com/eldy1anse/portafolio.git',
  },
  {
    nombre: 'Sistema de predicción de salud mental en estudiantes',
    descripcion: 'El presente proyecto implementa un modelo de árbol de decisión para predecir la posibilidad de que estudiantes universitarios experimenten problemas de salud mental como depresión, ansiedad y ataques de pánico.',
    link: 'https://github.com/eldy1anse/Sistema-de-Prediccion-de-Salud-Mental-en-Estudiantes.git',
  },
  {
    nombre: 'Cuatro en Raya',
    descripcion: 'Este proyecto implementa el juego de Cuatro en Raya mediante el modelo Cliente/Servidor.',
    link: 'https://github.com/eldy1anse/cuatroEnRaya.git',
  },
];

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="min-h-screen flex justify-center items-center px-4 py-16"
      style={{
        backgroundColor: 'var(--color-fondo)',
        color: 'var(--color-texto)',
      }}
    >
      <div className="w-full max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{proyecto.nombre}</h3>
              <p className="text-sm mb-4 text-gray-800">{proyecto.descripcion}</p>
              <a
                href={proyecto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline font-medium"
              >
                <FaGithub className="mr-2" /> Ver en GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



