import React, { useEffect, useReducer, useState } from "react";
import { context } from "./components/hooks/context";
import { reducer } from "./components/hooks/reducer";
import { Routes, Route } from "react-router-dom";

// components
import Home from "./components/Home";
import Header from "./components/Header";

// pages
import About from "./components/Pages/About";
import Error from "./components/Pages/Error";
import Cart from "./components/Cart/Cart";

const initialState = {
  cart: [],
  modalItem: {},
  showModal: false,
  isLoading: true,
  total: 0,
};

function App() {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://course-api.com/javascript-store-products"
      );
      const data = await response.json();
      dispatch({ type: "DATA" });
      data.forEach((item) => {
        item.count = 1;
      });
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payLoad: item });
  };

  const removeCartItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payLoad: id });
  };

  const increament = (id) => {
    dispatch({ type: "INCREAMENT", payLoad: id });
  };

  const decreament = (id) => {
    dispatch({ type: "DECREAMENT", payLoad: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <context.Provider
      value={{
        ...state,
        addToCart,
        increament,
        decreament,
        clearCart,
        removeCartItem,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </context.Provider>
  );
}

export default App;
