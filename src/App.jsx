
function App() {
  return (
    <div className="min-h-screen bg-pink-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-pink-700 tracking-wide">عائش</h1>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-pink-600 transition">Accueil</li>
          <li className="hover:text-pink-600 transition">Shop</li>
          <li className="hover:text-pink-600 transition">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Bienvenue sur notre site
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
          Découvrez nos produits uniques, pensés avec soin pour sublimer votre élégance naturelle.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full shadow-md text-lg transition-all duration-300">
          Explorer
        </button>
      </section>
    </div>
  );
}

export default App