import { useState } from "react";

import { useCart } from "../context/CartContext";

import API from "../services/api";

const Checkout = () => {

  const {
    cart,
    clearCart,
  } = useCart();

  const [name, setName] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");

  // TOTAL PRICE

  const totalAmount =
    cart.reduce(
      (acc, item) =>
        acc +
        Number(item.price) *
          (item.quantity || 1),
      0
    );

  // CASH ON DELIVERY

  const placeOrder = async () => {

    try {

      const orderData = {

        customerName: name,

        address,

        phone,

        paymentMethod,

        cart,

        totalPrice: totalAmount,

        status: "Pending",

        createdAt:
          new Date(),

      };

      await API.post(
        "/orders",
        orderData
      );

      alert(
        "Order placed successfully"
      );

      clearCart();

      window.location.href =
        "/success";

    } catch (err) {

      console.log(err);

      alert("Order failed");

    }

  };

  // STRIPE PAYMENT

  const handleStripePayment =
    async () => {

      try {

        const res =
          await API.post(
            "/create-checkout-session",
            {
              cart,
            }
          );

        console.log(res.data);

        // REDIRECT TO STRIPE PAGE

        if (res.data.url) {

          window.location.href =
            res.data.url;

        } else {

          alert(
            "Stripe checkout URL not found"
          );

        }

      } catch (err) {

        console.log(err);

        if (
          err.response &&
          err.response.data &&
          err.response.data.error
        ) {

          alert(
            err.response.data.error
          );

        } else {

          alert(
            "Stripe payment failed"
          );

        }

      }

    };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-black mb-10">

        Checkout

      </h1>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* FORM */}

        <div className="bg-zinc-900 p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-6">

            Delivery Details

          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 bg-black rounded-xl mb-4"
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-4 bg-black rounded-xl mb-4"
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <textarea
            placeholder="Delivery Address"
            className="w-full p-4 bg-black rounded-xl mb-6 h-40"
            onChange={(e) =>
              setAddress(e.target.value)
            }
          />

          {/* PAYMENT METHOD */}

          <h2 className="text-2xl font-bold mb-4 mt-6">

            Payment Method

          </h2>

          <div className="space-y-4 mb-6">

            <label className="flex items-center gap-3 bg-black p-4 rounded-xl cursor-pointer">

              <input
                type="radio"
                value="Cash on Delivery"
                checked={
                  paymentMethod ===
                  "Cash on Delivery"
                }
                onChange={(e) =>
                  setPaymentMethod(
                    e.target.value
                  )
                }
              />

              <span>
                Cash on Delivery
              </span>

            </label>

            <label className="flex items-center gap-3 bg-black p-4 rounded-xl cursor-pointer">

              <input
                type="radio"
                value="Card Payment"
                checked={
                  paymentMethod ===
                  "Card Payment"
                }
                onChange={(e) =>
                  setPaymentMethod(
                    e.target.value
                  )
                }
              />

              <span>
                Stripe Card Payment
              </span>

            </label>

          </div>

          {/* BUTTON */}

          {paymentMethod ===
          "Cash on Delivery" ? (

            <button
              onClick={placeOrder}
              disabled={
                !name ||
                !phone ||
                !address
              }
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-zinc-700 p-4 rounded-2xl font-bold text-xl"
            >

              Place Order

            </button>

          ) : (

            <button
              onClick={
                handleStripePayment
              }
              disabled={
                !name ||
                !phone ||
                !address
              }
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-zinc-700 p-4 rounded-2xl font-bold text-xl"
            >

              Pay with Stripe

            </button>

          )}

        </div>

        {/* ORDER SUMMARY */}

        <div className="bg-zinc-900 p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-6">

            Order Summary

          </h2>

          <div className="space-y-5">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex justify-between"
              >

                <div>

                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="text-zinc-400">
                    Qty:
                    {item.quantity || 1}
                  </p>

                </div>

                <p className="text-orange-500 font-bold">

                  £{
                    item.price *
                    (item.quantity || 1)
                  }

                </p>

              </div>

            ))}

          </div>

          <div className="border-t border-zinc-700 mt-8 pt-6">

            <h2 className="text-4xl font-black">

              Total:
              £{
                totalAmount.toFixed(2)
              }

            </h2>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Checkout;