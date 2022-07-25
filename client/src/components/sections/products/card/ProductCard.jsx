import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { setProduct } from "../../../../redux/searchBar";
import { useDispatch } from "react-redux";

function ProductCard({ props }) {
  const dispatch = useDispatch;
  return (
    <div key={props.id}>
      <Link
        to={`/details/${props.id}`}
        onClick={() => dispatch(setProduct(props))}
        key={props.id}
      >
        <article className={styles.popular__cardd}>
          <img src={props.img_url} alt="" className={styles.popular__imgg} />

          <div className={styles.popular__dataa}>
            <h2 className={styles.popular__pricee}>
              <span>$</span>
              {props.price}
            </h2>
            <h3 className={styles.popular__titlee}>{props.name}</h3>
          </div>
        </article>
      </Link>
    </div>
  );
}

export default ProductCard;
