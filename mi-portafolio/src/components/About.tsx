export default function About() {
  return (
    <section
      id="sobremi"
      className="min-h-screen flex flex-col justify-center items-center px-4"
      style={{
        backgroundColor: 'var(--color-secundario)',
        color: 'var(--color-texto)',
      }}
    >
      <div className="max-w-3xl text-center">
        {/* Titulo con animacion de fade-up */}
        <h2
          className="text-3xl font-bold mb-6"
          data-aos="fade-up"
          >
            Sobre mí
          </h2>
        <p
          className="text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hola, soy Dylan Suazo Escobar, estudiante de Ingeniería de Ejecución
          en Computación e Informática en la Universidad del Bío-Bío. Me
          interesa el desarrollo web y móvil, y actualmente estoy trabajando en
          proyectos personales como este portafolio.
        </p>
      </div>
    </section>
  );
}
