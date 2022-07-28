import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./card/ProductCard";
// import "../products/Products.css";
import { useDispatch } from "react-redux";
import { clearProduct } from "../../../redux/searchBar";
import { Link } from "react-router-dom";

function Products() {
  const { products } = useSelector((state) => state.searchBar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearProduct());
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
      <span className="section__subtitle">Best Choise</span>
      <h2 className="section__title">
        Our Phones<span>.</span>
      </h2>

      <div className="popular__container">
        <div className="elements">
          {products.map((product) => (
            <Link to={`/details/${product.id}`}>
              <ProductCard props={product} key={product.id} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
