import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Page from "./components/Page";
import Products from "./components/sections/products/Products.jsx";
import Header from "./components/sections/containers/Header";
import Details from "./components/sections/details/Details.jsx";
import Create from "./components/sections/admin/pages/Create";
import "./index.css";
import { fetchAllProduts } from "./redux/searchBar";
import { Routes, Route } from "react-router-dom";
import { clearUser, setUser } from "./redux/user.js";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedRoute } from "./protected-route";
import Admin from "./components/sections/admin/Admin.jsx";
import axios from "axios";
import Update from "./components/sections/admin/pages/update/Update.jsx";
import UpdateId from "./components/sections/admin/pages/update/UpdateId.jsx";
import Delete from "./components/sections/admin/pages/delete/Delete";

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
        <Route
          path="/admin/create"
          element={<ProtectedRoute component={Create} role="admin" />}
        />
        <Route
          path="/admin/update"
          element={<ProtectedRoute component={Update} role="admin" />}
        />
        <Route
          path="/admin/update/:id"
          element={<ProtectedRoute component={UpdateId} role="admin" />}
        />
        <Route
          path="/admin/delete"
          element={<ProtectedRoute component={Delete} role="admin" />}
        />
      </Routes>
    </div>
  );
}

export default App;
