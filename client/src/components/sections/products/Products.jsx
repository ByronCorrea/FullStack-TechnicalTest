import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./card/ProductCard";
import "../products/Products.css";

function Products() {
  const { products, brands } = useSelector((state) => state.searchBar);

  return (
    <section className="sectionn">
      <div className="select">
        <select name="select">
          <option value="">All</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      <span className="section__subtitle">Best Choise</span>
      <h2 className="section__title">
        Our Phones<span>.</span>
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

export default Products;
