import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

const CartDrawer = () => {

  const {
    cart,
    removeFromCart,
  } = useCart();

  // TOTAL PRICE

  const totalPrice =
    cart.reduce(
      (total, item) =>
        total +
        item.price *
          (item.quantity || 1),
      0
    );

  return (

    <div className="bg-zinc-900 text-white p-6 m-10 rounded-2xl">

      <h2 className="text-3xl font-bold mb-6">

        Cart

      </h2>

      {cart.length === 0 ? (

        <p className="text-zinc-400">

          Your cart is empty

        </p>

      ) : (

        <>

          {cart.map((item) => (

            <div
              key={item.id}
              className="flex justify-between items-center mb-4 bg-black p-4 rounded-xl"
            >

              <div>

                <h3 className="font-bold text-xl">

                  {item.name}

                </h3>

                <p className="text-zinc-400">

                  Qty:
                  {item.quantity || 1}

                </p>

                <p className="text-orange-500 font-bold">

                  £
                  {
                    item.price *
                    (item.quantity || 1)
                  }

                </p>

              </div>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl font-bold transition"
              >

                Remove

              </button>

            </div>

          ))}

          {/* TOTAL */}

          <div className="mt-8 border-t border-zinc-700 pt-6">

            <h2 className="text-3xl font-black mb-6">

              Total:
              £{
                totalPrice.toFixed(2)
              }

            </h2>

            {/* CHECKOUT BUTTON */}

            <Link to="/checkout">

              <button className="w-full bg-orange-500 hover:bg-orange-600 p-4 rounded-2xl font-bold text-xl transition">

                Checkout

              </button>

            </Link>

          </div>

        </>

      )}

    </div>

  );

};

export default CartDrawer;