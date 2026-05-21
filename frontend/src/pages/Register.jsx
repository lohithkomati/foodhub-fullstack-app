import { useState } from "react";
import API from "../services/api";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {

    const res = await API.post("/register", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);

    alert(res.data.message);
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">

      <div className="bg-zinc-900 p-10 rounded-xl w-[400px]">

        <h1 className="text-4xl font-bold mb-5">
          Register
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 bg-zinc-800 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 bg-zinc-800 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={registerUser}
          className="w-full bg-orange-500 p-3 rounded"
        >
          Register
        </button>

      </div>
    </div>
  );
};

export default Register;