const Success = () => {

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="bg-zinc-900 p-10 rounded-3xl text-center">

        <h1 className="text-6xl font-black text-green-500 mb-6">

          Order Successful 🎉

        </h1>

        <p className="text-zinc-300 text-xl mb-8">

          Your order has been placed successfully.

        </p>

        <a href="/">

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-bold text-lg">

            Back To Home

          </button>

        </a>

      </div>

    </div>

  );

};

export default Success;