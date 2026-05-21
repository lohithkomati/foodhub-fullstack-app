const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 px-6 md:px-16 py-20">

      <div className="grid md:grid-cols-4 gap-10">

        <div>

          <h1 className="text-4xl font-black text-orange-500">
            FoodHub
          </h1>

          <p className="text-zinc-400 mt-6 leading-8">
            Premium food delivery platform with
            fast delivery and top restaurants.
          </p>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-5">
            Company
          </h2>

          <div className="flex flex-col gap-4 text-zinc-400">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-5">
            Support
          </h2>

          <div className="flex flex-col gap-4 text-zinc-400">
            <a href="#">Help Center</a>
            <a href="#">Safety</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>

        </div>

        <div>

          <h2 className="text-2xl font-bold mb-5">
            Contact
          </h2>

          <div className="flex flex-col gap-4 text-zinc-400">
            <p>foodhub@gmail.com</p>
            <p>+44 999 888 777</p>
            <p>London, United Kingdom</p>
          </div>

        </div>

      </div>

      <div className="border-t border-zinc-800 mt-16 pt-8 text-center text-zinc-500">
        © 2025 FoodHub. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;