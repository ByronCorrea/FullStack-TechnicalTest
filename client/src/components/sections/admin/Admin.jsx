import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <section className="section admin">
      <span className="section__subtitle">Admin Panel</span>
      <h2 className="section__title">
        ¿What do you want to do? <span>.</span>
      </h2>
      <Link to="/admin/create">
        <button className="button popular">Create product</button>
      </Link>
      <Link to="/admin/update">
        <button className="button popular">Update product</button>
      </Link>
      <Link to="/admin/delete">
        <button className="button popular">Delete product</button>
      </Link>
    </section>
  );
}

export default Admin;
