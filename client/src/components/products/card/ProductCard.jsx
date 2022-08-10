import React from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ props }) {
  return (
    <div key={props.id}>
      <article className={styles.popular__cardd}>
        <img src={props.img_url} alt="" className={styles.popular__imgg} />

        <div className={styles.popular__dataa}>
          <h2 className={styles.popular__pricee}>
            <span>$</span>
            {props.price} <span>USD</span>
          </h2>
          <h3 className={styles.popular__titlee}>{props.name}</h3>
        </div>
      </article>
    </div>
  );
}

export default ProductCard;
