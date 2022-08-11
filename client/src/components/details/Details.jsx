import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById, clearProduct } from "../../redux/searchBar";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(clearProduct());
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const { product } = useSelector((state) => state.searchBar);
  return (
    <section
      className="section details"
      style={{
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="container">
        <span className="section__subtitle">{product.name}</span>
        <h2 className="section__title">
          Details
          <span>.</span>
        </h2>

        <div>
          <img
            src={product.img_url}
            alt={product.name}
            style={{
              display: "flex",
              maxWidth: "350px",
              height: "350px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              borderRadius: "20px",
            }}
          />
        </div>

        <div>
          <h4 style={{ color: "#ecb365" }}>Brand: </h4>
          <div>
            <span>{product.BrandId}</span>
          </div>
        </div>

        <div>
          <h4 style={{ color: "#ecb365" }}>Description:</h4>
        </div>
        <div>
          <div>{product.description}</div>
        </div>
      </div>
    </section>
  );
}

export default Details;
