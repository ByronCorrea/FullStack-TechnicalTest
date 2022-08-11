import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../../../products/Products.css";
import ProductCard from "../../../products/card/ProductCardDelete";
import {
  clearProduct,
  clearProducts,
  fetchAllProduts,
} from "../../../../redux/searchBar";

function DeleteProduct() {
  const { products } = useSelector((state) => state.searchBar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearProducts());
    dispatch(clearProduct());
    dispatch(fetchAllProduts());
  }, [dispatch]);
  return (
    <section className="section">
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
      <span className="section__subtitle">Delete</span>
      <h2 className="section__title">
        Select a phone to delete<span>.</span>
      </h2>

      <div className="popular__container">
        <div className="elements">
          {products.map((product) => (
            <ProductCard props={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeleteProduct;
