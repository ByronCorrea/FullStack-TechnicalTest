import React, { useEffect } from "react";
import styles from "./Details.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../../../redux/searchBar";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const { product } = useSelector((state) => state.searchBar);
  return (
    <section className="section">
      <div className="container">
        <span className="section__subtitle">{product.name}</span>
        <h2 className="section__title">
          Details
          <span>.</span>
        </h2>

        <div className={styles.sliderr}>
          <img src={product.img_url} alt="" />
        </div>

        <div className={styles.genress}>
          <h4 style={{ color: "#ecb365" }}>Brand: </h4>
          <div className={styles.genres22}>
            <span>{product.brand}</span>
          </div>
        </div>

        <div className={styles.ratingg}>
          <h4 style={{ color: "#ecb365" }}>Description</h4>
        </div>
        <div className={styles.descriptionn}>
          <div>{product.description}</div>
        </div>
      </div>
    </section>
  );
}

export default Details;
