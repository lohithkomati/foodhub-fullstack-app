import { useEffect, useState } from "react";

import API from "../services/api";

const Admin = () => {

  const [orders, setOrders] =
    useState([]);

  // LOCAL STORAGE AUTH

  const isLoggedIn =
    localStorage.getItem(
      "isLoggedIn"
    );

  const userEmail =
    localStorage.getItem(
      "userEmail"
    );

  // ADMIN PROTECTION

  if (
    !isLoggedIn ||
    userEmail !==
      "admin@gmail.com"
  ) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl font-black">

        Access Denied

      </div>

    );

  }

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

  // UPDATE ORDER STATUS

  const updateStatus = async (
    orderId,
    newStatus
  ) => {

    try {

      await API.put(
        `/orders/${orderId}`,
        {
          status: newStatus,
        }
      );

      fetchOrders();

    } catch (err) {

      console.log(err);

      alert("Failed to update status");

    }

  };

  // TOTAL REVENUE

  const totalRevenue =
    orders.reduce(
      (acc, order) =>
        acc +
        Number(
          order.totalPrice || 0
        ),
      0
    );

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-black mb-10">

        Admin Dashboard

      </h1>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-zinc-900 p-8 rounded-3xl">

          <h2 className="text-zinc-400 text-xl">
            Total Orders
          </h2>

          <p className="text-5xl font-black text-orange-500 mt-4">

            {orders.length}

          </p>

        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">

          <h2 className="text-zinc-400 text-xl">
            Revenue
          </h2>

          <p className="text-5xl font-black text-orange-500 mt-4">

            £{totalRevenue.toFixed(2)}

          </p>

        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">

          <h2 className="text-zinc-400 text-xl">
            Customers
          </h2>

          <p className="text-5xl font-black text-orange-500 mt-4">

            {orders.length}

          </p>

        </div>

      </div>

      {/* RECENT ORDERS */}

      <div className="bg-zinc-900 p-8 rounded-3xl">

        <h2 className="text-3xl font-bold mb-8">

          Recent Orders

        </h2>

        <div className="space-y-6">

          {orders.map((order, index) => (

            <div
              key={index}
              className="bg-black p-6 rounded-2xl flex justify-between items-center"
            >

              {/* LEFT */}

              <div>

                <h3 className="text-2xl font-bold">

                  {order.customerName ||
                    "Unknown Customer"}

                </h3>

                <p className="text-zinc-400 mb-3">

                  {order.paymentMethod ||
                    "No Payment Method"}

                </p>

                {/* STATUS */}

                <select
                  value={
                    order.status ||
                    "Pending"
                  }
                  onChange={(e) =>
                    updateStatus(
                      order._id,
                      e.target.value
                    )
                  }
                  className="bg-zinc-800 text-white p-3 rounded-xl outline-none"
                >

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Preparing">
                    Preparing
                  </option>

                  <option value="Out for Delivery">
                    Out for Delivery
                  </option>

                  <option value="Delivered">
                    Delivered
                  </option>

                </select>

              </div>

              {/* RIGHT */}

              <div className="text-right">

                <h2 className="text-orange-500 text-2xl font-black">

                  £{
                    Number(
                      order.totalPrice || 0
                    ).toFixed(2)
                  }

                </h2>

                <p className="text-zinc-400 mb-2">

                  {
                    order.cart?.length || 0
                  } items

                </p>

                <p className="text-green-500 font-bold text-lg">

                  {order.status ||
                    "Pending"}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default Admin;