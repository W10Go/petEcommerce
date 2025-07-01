import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${geistSans.className} ${geistMono.className} h-screen overflow-y-scroll snap-y snap-mandatory`}
    >
      {/* Hero Section */}
      <section className="h-screen snap-start flex flex-col items-center justify-center bg-amber-100">
        <h1 className="text-5xl text-center font-bold text-amber-900 mb-6">
          Bienvenido a Tarci
        </h1>
        <p className="text-xl text-amber-800 max-w-2xl text-center">
          Tu tienda favorita para consentir a tus mascotas. Descubre productos
          únicos y ofertas especiales.
        </p>
      </section>

      {/* Shop Section */}
      <section className="h-screen snap-start flex flex-col items-center justify-center bg-white">
        <h2 className="text-4xl font-bold text-amber-900 mb-4">Tienda</h2>
        <p className="text-lg text-amber-800 max-w-xl text-center mb-8">
          Explora nuestra amplia selección de alimentos, juguetes y accesorios
          para todo tipo de mascotas.
        </p>
        <button className="px-6 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition">
          Ver productos
        </button>
      </section>

      {/* About Section */}
      <section className="h-screen snap-start flex flex-col items-center justify-center bg-amber-50">
        <h2 className="text-4xl font-bold text-amber-900 mb-4">
          Acerca de Tarci
        </h2>
        <p className="text-lg text-amber-800 max-w-xl text-center">
          Somos amantes de los animales comprometidos con la calidad y el
          bienestar de tus mascotas. Conoce más sobre nuestra historia y
          valores.
        </p>
      </section>

      {/* Contact Section */}
      <section className="h-screen snap-start flex flex-col items-center justify-center bg-white">
        <h2 className="text-4xl font-bold text-amber-900 mb-4">Contáctanos</h2>
        <p className="text-lg text-amber-800 max-w-xl text-center mb-8">
          ¿Tienes dudas o sugerencias? ¡Estamos para ayudarte!
        </p>
        <button className="px-6 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition">
          Escríbenos
        </button>
      </section>
    </main>
  );
}
