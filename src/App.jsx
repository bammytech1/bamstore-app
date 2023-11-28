import Layout from "./componets/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OurStore } from "./pages/OurStore";
import ForgotPassword from "./pages/ForgotPassword";
import SingleProduct from "./pages/SingleProduct";
import CartList from "./pages/CartList";

import Loader from "./componets/Loader";

import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./redux/features/auth/authSlice";
import CreateProduct from "./componets/admin/createProduct";
import NewProducts from "./componets/NewProducts";

function App() {
  axios.defaults.withCredentials = true;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoginStatus());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ourstore" element={<OurStore />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="ourstore/product" element={<SingleProduct />} />
          <Route path="cart" element={<CartList />} />
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="newProduct" element={<NewProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
