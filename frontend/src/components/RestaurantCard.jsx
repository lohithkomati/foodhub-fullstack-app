const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden">

      <img
        src={restaurant.image}
        alt=""
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-2xl font-bold">
          {restaurant.name}
        </h2>

        <p className="text-orange-500 mt-2">
          ⭐ {restaurant.rating}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;