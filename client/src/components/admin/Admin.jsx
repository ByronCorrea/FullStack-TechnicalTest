import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <section className="section admin">
      <span className="section__subtitle">Admin Panel</span>
      <h2 className="section__title">
        ¿What do you want to do? <span>.</span>
      </h2>
      <div className="admingrid">
        <div className="adminproduct">
          <Link to="/admin/createproduct">
            <button className="button popular">Create product</button>
          </Link>
          <Link to="/admin/updateproduct">
            <button className="button popular">Update product</button>
          </Link>
          <Link to="/admin/deleteproduct">
            <button className="button popular">Delete product</button>
          </Link>
        </div>
        <div className="adminbrand">
          <Link to="/admin/createbrand">
            <button className="button popular">Create brand</button>
          </Link>
          <Link to="/admin/updatebrand">
            <button className="button popular">Update brand</button>
          </Link>
          <Link to="/admin/deletebrand">
            <button className="button popular">Delete brand</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Admin;
