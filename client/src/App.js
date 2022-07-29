import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Page from "./components/Page";
import Products from "./components/sections/products/Products.jsx";
import Header from "./components/sections/containers/Header";
import Details from "./components/sections/details/Details.jsx";
import "./index.css";
import { fetchAllProduts } from "./redux/searchBar";
import { Routes, Route } from "react-router-dom";
import { clearUser, setUser } from "./redux/user.js";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedRoute } from "./protected-route";
import Admin from "./components/sections/admin/Admin.jsx";
import axios from "axios";
import CreateProduct from "./components/sections/admin/pages/create/CreateProduct";
import UpdateProduct from "./components/sections/admin/pages/update/UpdateProduct.jsx";
import UpdateIdProduct from "./components/sections/admin/pages/update/UpdateIdProduct.jsx";
import DeleteProduct from "./components/sections/admin/pages/delete/DeleteProduct";
import DeleteBrand from "./components/sections/admin/pages/delete/DeleteBrand";
import UpdateIdBrand from "./components/sections/admin/pages/update/UpdateIdBrand";
import CreateBrand from "./components/sections/admin/pages/create/CreateBrand";
import UpdateBrand from "./components/sections/admin/pages/update/UpdateBrand";

function App() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(clearUser());
    } else {
      async function setCustomer() {
        try {
          const res = await axios.post("/customers", user);
          localStorage.setItem("token", `Bearer ${res.headers.authorization}`);
          dispatch(setUser(res.data.customer));
        } catch (error) {
          console.log(error);
        }
      }
      setCustomer();
    }
  }, [isAuthenticated, user, dispatch]);

  useEffect(() => {
    dispatch(fetchAllProduts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
        <Route
          path="/admin"
          element={<ProtectedRoute component={Admin} role="admin" />}
        />
        {/* PRODUCTS */}
        <Route
          path="/admin/createproduct"
          element={<ProtectedRoute component={CreateProduct} role="admin" />}
        />
        <Route
          path="/admin/updateproduct"
          element={<ProtectedRoute component={UpdateProduct} role="admin" />}
        />
        <Route
          path="/admin/updateproduct/:id"
          element={<ProtectedRoute component={UpdateIdProduct} role="admin" />}
        />
        <Route
          path="/admin/deleteproduct"
          element={<ProtectedRoute component={DeleteProduct} role="admin" />}
        />
        {/* BRANDS */}
        <Route
          path="/admin/createbrand"
          element={<ProtectedRoute component={CreateBrand} role="admin" />}
        />
        <Route
          path="/admin/updatebrand"
          element={<ProtectedRoute component={UpdateBrand} role="admin" />}
        />
        <Route
          path="/admin/updatebrand/:id"
          element={<ProtectedRoute component={UpdateIdBrand} role="admin" />}
        />
        <Route
          path="/admin/deletebrand"
          element={<ProtectedRoute component={DeleteBrand} role="admin" />}
        />
      </Routes>
    </div>
  );
}

export default App;
