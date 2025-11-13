export default function Home() {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-sky-100 via-sky-200 to-sky-300 relative overflow-hidden">
      {/* 🌸 Subtle floral overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/floral-white.png')] opacity-15 pointer-events-none mix-blend-overlay"></div>

      {/* 🌤️ Hero Text */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-3 leading-tight drop-shadow-sm">
          Welcome to <span className="text-sky-600">HolyMoly</span>
        </h1>

        <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto">
          Discover fashion that speaks your vibe ✨
        </p>

        <div className="mt-6">
          <a
            href="/products"
            className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Explore Shop
          </a>
        </div>
      </div>
    </section>
  );
}