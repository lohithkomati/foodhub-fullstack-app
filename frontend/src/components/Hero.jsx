const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center px-6 md:px-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
      }}
    >

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* CONTENT */}

      <div className="relative z-10 max-w-3xl">

        <p className="text-orange-500 text-xl font-bold mb-6 tracking-widest">
          FAST DELIVERY
        </p>

        <h1 className="text-5xl md:text-8xl font-black leading-tight">
          Delicious Food
          <br />
          Delivered Fast
        </h1>

        <p className="text-zinc-300 text-lg md:text-2xl mt-8">
          Burgers, Pizza, Biryani, Pasta, Desserts and more.
        </p>

        <div className="flex flex-wrap gap-5 mt-10">

          <a
            href="#menu"
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-bold text-lg transition"
          >
            Order Now
          </a>

          <a
            href="#popular"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-bold text-lg transition"
          >
            Popular Foods
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;