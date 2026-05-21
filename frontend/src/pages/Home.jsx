import { useState, useEffect } from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import CartDrawer from "../components/CartDrawer";
import Footer from "../components/Footer";
import FoodModal from "../components/FoodModal";

import categories from "../data/categories";

import { useCart } from "../context/CartContext";

import API from "../services/api";

const Home = () => {

  const { addToCart } = useCart();

  const [foods, setFoods] =
    useState([]);

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const [selectedFood, setSelectedFood] =
    useState(null);

  // FETCH FOODS FROM BACKEND

  useEffect(() => {

    const fetchFoods = async () => {

      try {

        const res =
          await API.get("/foods");

        setFoods(res.data);

      } catch (err) {

        console.log(err);

      }

    };

    fetchFoods();

  }, []);

  // SEARCH + CATEGORY FILTER

  const filteredFoods = foods.filter((food) => {

    const categoryMatch =
      selectedCategory === "All"
        ? true
        : food.category === selectedCategory;

    const searchMatch = food.name
      .toLowerCase()
      .includes(search.toLowerCase().trim());

    return categoryMatch && searchMatch;

  });

  // POPULAR FOODS

  const popularFoods = foods.filter(
    (food) => food.popular === true
  );

  return (

    <div className="bg-gradient-to-b from-black via-zinc-950 to-black text-white min-h-screen">

      {/* NAVBAR */}

      <Navbar />

      {/* HERO */}

      <section id="home">
        <Hero />
      </section>

      {/* SEARCH */}

      <section className="px-6 md:px-16 py-10">

        <div className="relative">

          <input
            type="text"
            placeholder="Search pizza, burger, pasta..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full bg-zinc-900 p-5 rounded-2xl outline-none text-lg border border-zinc-800"
          />

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="px-6 md:px-16 py-8">

        <h2 className="text-5xl font-black mb-10 text-center">
          Categories
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`px-6 py-3 rounded-2xl font-bold transition duration-300 ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-zinc-900 hover:bg-zinc-800"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      </section>

      {/* POPULAR FOODS */}

      <section
        id="popular"
        className="px-6 md:px-16 py-16"
      >

        <h2 className="text-5xl font-black mb-12 text-center">
          Popular Foods
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

          {popularFoods.map((item) => (

            <div
              key={item.id}
              onClick={() =>
                setSelectedFood(item)
              }
            >

              <FoodCard
                item={item}
                addToCart={addToCart}
              />

            </div>

          ))}

        </div>

      </section>

      {/* MENU */}

      <section
        id="menu"
        className="px-6 md:px-16 py-16"
      >

        <h2 className="text-5xl font-black mb-12 text-center">
          Our Menu
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

          {filteredFoods.length > 0 ? (

            filteredFoods.map((item) => (

              <div
                key={item.id}
                onClick={() =>
                  setSelectedFood(item)
                }
              >

                <FoodCard
                  item={item}
                  addToCart={addToCart}
                />

              </div>

            ))

          ) : (

            <div className="col-span-full text-center py-20">

              <h2 className="text-4xl font-bold text-orange-500">
                No Food Found
              </h2>

              <p className="text-zinc-400 mt-4">
                Try searching another item
              </p>

            </div>

          )}

        </div>

      </section>

      {/* ABOUT SECTION */}

      <section
        id="about"
        className="px-6 md:px-16 py-24 bg-zinc-950"
      >

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
              alt=""
              className="rounded-3xl shadow-2xl h-[600px] w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-orange-500 text-white px-8 py-5 rounded-2xl shadow-2xl">

              <h2 className="text-4xl font-black">
                10+
              </h2>

              <p className="text-lg">
                Years Experience
              </p>

            </div>

          </div>

          <div>

            <p className="text-orange-500 text-xl mb-4 font-semibold">
              ABOUT OUR RESTAURANT
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">

              Fresh Food,
              <br />
              Fast Delivery
              <br />
              Premium Experience

            </h2>

            <p className="text-zinc-400 text-lg leading-9 mt-8">

              Welcome to FoodHub — your ultimate destination
              for delicious meals delivered straight to your
              doorstep.

            </p>

            <p className="text-zinc-400 text-lg leading-9 mt-6">

              We provide burgers, pizzas, biryanis,
              desserts, drinks, pasta and premium
              restaurant-quality food with modern
              fast delivery experience.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-black p-6 rounded-2xl border border-zinc-800">

                <h3 className="text-orange-500 text-3xl font-black">
                  500+
                </h3>

                <p className="text-zinc-400 mt-2">
                  Daily Orders
                </p>

              </div>

              <div className="bg-black p-6 rounded-2xl border border-zinc-800">

                <h3 className="text-orange-500 text-3xl font-black">
                  50+
                </h3>

                <p className="text-zinc-400 mt-2">
                  Food Items
                </p>

              </div>

              <div className="bg-black p-6 rounded-2xl border border-zinc-800">

                <h3 className="text-orange-500 text-3xl font-black">
                  4.9★
                </h3>

                <p className="text-zinc-400 mt-2">
                  Customer Rating
                </p>

              </div>

              <div className="bg-black p-6 rounded-2xl border border-zinc-800">

                <h3 className="text-orange-500 text-3xl font-black">
                  24/7
                </h3>

                <p className="text-zinc-400 mt-2">
                  Fast Delivery
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOD MODAL */}

      <FoodModal
        selectedFood={selectedFood}
        closeModal={() =>
          setSelectedFood(null)
        }
      />

      {/* CART */}

      <CartDrawer />

      {/* FOOTER */}

      <Footer />

    </div>

  );

};

export default Home;