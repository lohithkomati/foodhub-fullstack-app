import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  // LOGIN

  const handleLogin = async () => {

    try {

      const res = await API.post(
        "/login",
        {
          email,
          password,
        }
      );

      if (res.data.success) {

        localStorage.setItem(
          "isLoggedIn",
          "true"
        );

        localStorage.setItem(
          "userEmail",
          email
        );

        alert("Login Success");

        navigate("/");

      } else {

        alert(
          "Invalid Credentials"
        );

      }

    } catch (err) {

      console.log(err);

      alert("Login Failed");

    }

  };

  // REGISTER

  const handleRegister = async () => {

    try {

      await API.post(
        "/register",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      localStorage.setItem(
        "userEmail",
        email
      );

      alert("Account Created");

      navigate("/");

    } catch (err) {

      console.log(err);

      alert("Register Failed");

    }

  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="bg-zinc-900 p-10 rounded-3xl w-[400px] shadow-2xl">

        <h1 className="text-4xl font-black mb-8 text-center">

          FoodHub Login

        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full p-4 rounded-xl bg-black mb-4 outline-none border border-zinc-800"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-full p-4 rounded-xl bg-black mb-6 outline-none border border-zinc-800"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 hover:bg-orange-600 transition p-4 rounded-xl font-bold mb-4"
        >
          Login
        </button>

        <button
          onClick={handleRegister}
          className="w-full bg-zinc-800 hover:bg-zinc-700 transition p-4 rounded-xl font-bold mb-4"
        >
          Register
        </button>

      </div>

    </div>

  );

};

export default Login;