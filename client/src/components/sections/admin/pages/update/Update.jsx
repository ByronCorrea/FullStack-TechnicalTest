import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../../../../sections/products/Products.css";
import ProductCard from "../../../products/card/ProductCard";
import {
  clearProduct,
  clearProducts,
  fetchAllProduts,
} from "../../../../../redux/searchBar";
import { Link } from "react-router-dom";

function Update() {
  const { products } = useSelector((state) => state.searchBar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearProducts());
    dispatch(clearProduct());
    dispatch(fetchAllProduts());
  }, [dispatch]);

  return (
    <section className="sectionn">
      {/* <div className="select">
        <select name="select">
          <option value="">All</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand}>
              {brand.name}
            </option>
          ))}
        </select>
      </div> */}
      <span className="section__subtitle">Update</span>
      <h2 className="section__title">
        Select a phone to update<span>.</span>
      </h2>

      <div className="popular__container">
        <div className="elements">
          {products.map((product) => (
            <Link to={`/admin/update/${product.id}`}>
              <ProductCard props={product} key={product.id} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Update;
