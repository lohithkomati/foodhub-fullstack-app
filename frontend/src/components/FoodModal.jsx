const FoodModal = ({ selectedFood, closeModal }) => {
  if (!selectedFood) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-zinc-900 p-6 rounded-2xl w-[400px]">

        <img
          src={selectedFood.image}
          alt=""
          className="rounded-xl h-60 w-full object-cover"
        />

        <h2 className="text-3xl font-bold mt-4">
          {selectedFood.name}
        </h2>

        <p className="text-orange-500 mt-2">
          ⭐ {selectedFood.rating}
        </p>

        <p className="mt-3 text-zinc-400">
          Delicious premium quality food.
        </p>

        <button
          onClick={closeModal}
          className="bg-orange-500 mt-6 px-6 py-2 rounded-xl"
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default FoodModal;