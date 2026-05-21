import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

import { logoutUser } from "../services/auth";

const Navbar = () => {

  const { cart } = useCart();

  // GET USER FROM LOCALSTORAGE

  const userEmail =
    localStorage.getItem("userEmail");

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  const handleLogout = async () => {

    try {

      localStorage.removeItem(
        "isLoggedIn"
      );

      localStorage.removeItem(
        "userEmail"
      );

      await logoutUser();

      alert("Logged out");

      window.location.href = "/login";

    } catch (err) {

      alert(err.message);

    }

  };

  return (

    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-zinc-800">

      <div className="flex items-center justify-between px-6 md:px-16 py-5">

        {/* LOGO */}

        <div className="text-4xl font-black text-orange-500">
          FoodHub
        </div>

        {/* NAV LINKS */}

        <div className="hidden md:flex gap-10 font-bold text-lg">

          <a
            href="#home"
            className="hover:text-orange-500 transition"
          >
            Home
          </a>

          <a
            href="#menu"
            className="hover:text-orange-500 transition"
          >
            Menu
          </a>

          <a
            href="#about"
            className="hover:text-orange-500 transition"
          >
            About
          </a>

          <Link
            to="/orders"
            className="hover:text-orange-500 transition"
          >
            Orders
          </Link>

          <Link
            to="/admin"
            className="hover:text-orange-500 transition"
          >
            Admin
          </Link>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">

          {/* USER */}

          {isLoggedIn ? (

            <div className="hidden md:flex items-center gap-3">

              <p className="text-sm text-zinc-300 font-semibold">
                {userEmail}
              </p>

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-bold transition"
              >
                Logout
              </button>

            </div>

          ) : (

            <a
              href="/login"
              className="bg-zinc-800 hover:bg-zinc-700 px-5 py-2 rounded-xl font-bold transition"
            >
              Login
            </a>

          )}

          {/* CART */}

          <button className="bg-orange-500 px-6 py-3 rounded-2xl font-bold hover:bg-orange-600 transition">

            Cart ({cart.length})

          </button>

        </div>

      </div>

    </nav>

  );

};

export default Navbar;