import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Page from "./components/Page";
import Products from "./components/sections/products/Products.jsx";
import Header from "./components/sections/containers/Header";
import "./index.css";
import { fetchAllProduts } from "./redux/searchBar";
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProduts());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Page />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
