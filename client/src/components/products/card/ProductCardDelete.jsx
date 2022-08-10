import React from "react";
import styles from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/searchBar";
import toast, { Toaster } from "react-hot-toast";

function ProductCardDelete({ props }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(deleteProduct(props.id));
    toast.success("Product deleted successfully");
  };

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
        <button className={styles.nav__buttonn} onClick={handleDelete}>
          Delete
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </article>
    </div>
  );
}

export default ProductCardDelete;
