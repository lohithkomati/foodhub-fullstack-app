import Orders from "./pages/Orders";
import Success from "./pages/Success";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route
          path="/success"
          element={<Success />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;