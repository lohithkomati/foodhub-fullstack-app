import { useEffect, useState } from "react";

import API from "../services/api";

const Orders = () => {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = async () => {

    try {

      const res =
        await API.get("/orders");

      setOrders(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-black mb-10">

        Order History

      </h1>

      <div className="space-y-8">

        {orders.map((order, index) => (

          <div
            key={index}
            className="bg-zinc-900 p-8 rounded-3xl"
          >

            <div className="flex justify-between mb-6">

              <div>

                <h2 className="text-2xl font-bold">

                  {order.customerName}

                </h2>

                <p className="text-zinc-400">

                  {order.phone}

                </p>

              </div>

              <div className="text-right">

                <h2 className="text-orange-500 text-2xl font-black">

                  £{order.totalPrice}

                </h2>

                <p className="text-zinc-400">

                  {order.paymentMethod}

                </p>

              </div>

            </div>

            <div className="space-y-4">

              {order.cart.map((item, i) => (

                <div
                  key={i}
                  className="flex justify-between border-b border-zinc-800 pb-3"
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

                    £
                    {item.price *
                      (item.quantity || 1)}

                  </p>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Orders;