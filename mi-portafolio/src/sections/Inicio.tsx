export default function Inicio() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      style={{ backgroundColor: 'var(--color-fondo)', color: 'var(--color-texto)' }}
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        ¡Hola! Soy Dylan
      </h1>
      <p className="mt-4 text-lg">
        Bienvenido a mi portafolio personal.
      </p>
    </section>
  );
}
