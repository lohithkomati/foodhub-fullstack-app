import { useEffect, useState } from "react";

import API from "../services/api";

const Menu = () => {

  const [foods, setFoods] =
    useState([]);

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

  return (

    <section
      id="menu"
      className="bg-black text-white py-20 px-6 md:px-16"
    >

      <h1 className="text-5xl font-black mb-14 text-center">

        Popular Foods

      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {foods.map((food) => (

          <div
            key={food.id}
            className="bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
          >

            <img
              src={food.image}
              alt={food.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-black mb-3">

                {food.name}

              </h2>

              <p className="text-orange-500 text-2xl font-bold">

                ₹{food.price}

              </p>

              <button
                className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl font-bold text-lg"
              >

                Add To Cart

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

};

export default Menu;