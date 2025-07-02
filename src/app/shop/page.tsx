export default function Shop() {
  // Example product data
  const products = [
    {
      id: 1,
      name: "Juguete para Perro",
      price: "$10.00",
      description: "Divertido juguete resistente para perros.",
    },
    {
      id: 2,
      name: "Comida Premium Gato",
      price: "$18.50",
      description: "Alimento balanceado para gatos adultos.",
    },
    {
      id: 3,
      name: "Collar Antipulgas",
      price: "$7.99",
      description: "Protege a tu mascota de pulgas y garrapatas.",
    },
    {
      id: 4,
      name: "Cama Suave",
      price: "$25.00",
      description: "Cama cómoda y suave para mascotas pequeñas.",
    },
    {
      id: 5,
      name: "Rascador para Gato",
      price: "$15.00",
      description: "Ideal para que tu gato afile sus uñas.",
    },
    {
      id: 6,
      name: "Correa Extensible",
      price: "$12.00",
      description: "Correa segura y cómoda para paseos.",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 pt-24 px-4">
      <h1 className="text-4xl font-bold text-amber-900 mb-10 text-center">
        Tienda
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            {/* Image Placeholder */}
            <div className="w-40 h-40 bg-amber-100 rounded mb-4 flex items-center justify-center">
              <span className="text-amber-300 text-6xl">🛒</span>
            </div>
            <h2 className="text-2xl font-semibold text-amber-900 mb-2 text-center">
              {product.name}
            </h2>
            <p className="text-amber-800 mb-2 text-center">
              {product.description}
            </p>
            <span className="text-lg font-bold text-amber-700 mb-4">
              {product.price}
            </span>
            <button className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
