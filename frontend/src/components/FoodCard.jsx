const FoodCard = ({ item, addToCart }) => {
  return (
    <div className="bg-zinc-900 rounded-3xl overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20 transition duration-300 cursor-pointer">

      <img
        src={item.image}
        alt={item.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">
            {item.name}
          </h2>

          <span className="text-yellow-400 font-bold">
            ⭐ {item.rating}
          </span>
        </div>

        <p className="text-zinc-400 mt-2">
          {item.category}
        </p>

        <div className="flex justify-between items-center mt-6">

          <h3 className="text-orange-500 text-3xl font-black">
            £{item.price}
          </h3>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
            }}
            className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-bold transition"
          >
            Add
          </button>

        </div>

      </div>

    </div>
  );
};

export default FoodCard;