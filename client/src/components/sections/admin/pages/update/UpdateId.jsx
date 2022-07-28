import React, { useEffect, useMemo } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchProductById,
  clearProduct,
  fetchAllProduts,
} from "../../../../../redux/searchBar";
import axios from "axios";

function UpdateId() {
  const { id } = useParams();
  const [input, setInput] = React.useState({
    brand: "",
    name: "",
    img_url: "",
    price: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { brands } = useSelector((state) => state.searchBar);

  const urlRegEx = useMemo(() => new RegExp("https?://.*.(?:png|jpg)"), []);
  const validate = (input) => {
    let error = {};
    if (!input.name || input.name.length < 3) {
      error.name = "¡Name is required and must be at least 3 characters!";
    } else if (!input.description || input.description.length < 10) {
      error.description =
        "¡Description is required and must be at least 10 characters!";
    } else if (!input.img_url || !urlRegEx.test(input.img_url)) {
      error.img_url = "¡Image URL is required and must be a valid URL!";
    } else if (!input.price || input.price.length < 1) {
      error.price = "¡Price is required and must a number !";
    }
    return error;
  };

  const [error, setError] = React.useState({});

  const onSelect = (e) => {
    e.preventDefault();
    let prueba = e.target.value;
    setInput({ ...input, brand: prueba });
  };

  function handleOnChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setInput({
      // brand: "",
      name: "",
      img_url: "",
      price: "",
      description: "",
    });

    if (
      !error.name &&
      !error.description &&
      !error.img_url &&
      !error.brand &&
      !error.price
    ) {
      toast.promise(
        axios.put("/products/" + id, {
          brand: input.brand,
          name: input.name,
          img_url: input.img_url,
          price: input.price,
          description: input.description,
        }),
        {
          loading: "Loading...",
          success: "Product updated successfully!",
          error: "Error updating product, try again!",
        }
      );
    } else {
      setInput({
        // brand: "",
        name: "",
        img_url: "",
        price: "",
        description: "",
      });
      toast.error("¡Please fill all the fields!");
    }
    dispatch(clearProduct());
    dispatch(fetchAllProduts());
    setTimeout(() => {
      console.log("");
      navigate("/admin/update");
    }, 3000);
  }

  useEffect(() => {
    var save_btn = document.querySelector(".but");

    save_btn.addEventListener("click", function () {
      setTimeout(() => {
        this.innerHTML = "<div class='loader'></div>";
      }, 0);
      setTimeout(() => {
        this.innerHTML = "Thanks!";
        this.style =
          "background: #2ee59d; color: #333; box-shadow: 1px 1px 10px 5px rgba(0, 226, 83, 0.2); opacity: 0.5;";
      }, 1000);
      setTimeout(() => {
        this.innerHTML = "Send";
        this.style = "background: var(--first-color); color: #333;";
      }, 2000);
    });
  }, []);

  useEffect(() => {
    dispatch(clearProduct());
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <div className="section">
      <form action="/" method="PUT" className="contact__form" type="submit">
        <div className="select contact__form-div">
          <select name="select" value={input.brand} onChange={onSelect}>
            <option value="" disabled>
              Select Brand...
            </option>
            {brands.map((brand) => (
              <option key={brand.id}>{brand.name}</option>
            ))}
          </select>
          {error.brand && <p className="danger">{error.name}</p>}
        </div>

        <div className="contact__form-div">
          <label className="contact__form-tag">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Insert product name"
            className="contact__form-input"
            onChange={handleOnChange}
            value={input.name}
            autoComplete="off"
            required={true}
          />
          {error.name && <p className="danger">{error.name}</p>}
        </div>

        <div className="contact__form-div">
          <label className="contact__form-tag">Image</label>
          <input
            name="img_url"
            type="text"
            placeholder="Insert product image url"
            className="contact__form-input"
            onChange={handleOnChange}
            value={input.img_url}
            autoComplete="off"
            required={true}
          />
          {error.img_url && <p className="danger">{error.img_url}</p>}
        </div>

        <div className="contact__form-div">
          <label className="contact__form-tag">Price</label>
          <input
            name="price"
            type="number"
            placeholder="Insert product price"
            className="contact__form-input"
            onChange={handleOnChange}
            value={input.price}
            autoComplete="off"
            required={true}
          />
          {error.price && <p className="danger">{error.price}</p>}
        </div>

        <div className="contact__form-div contact__form-area">
          <label className="contact__form-tag">Description</label>
          <textarea
            name="description"
            cols="30"
            rows="10"
            placeholder="Write description"
            className="contact__form-input"
            onChange={handleOnChange}
            value={input.description}
            autoComplete="off"
            required={true}
          ></textarea>
          {error.description && <p className="danger">{error.description}</p>}
        </div>
        <div className="wrap">
          <button
            className="buttonSend but"
            type="submit"
            onClick={(e) => handleSubmit(e)}
            disabled={
              !input.name ||
              !input.description ||
              !input.img_url ||
              !input.brand ||
              !input.price
            }
          >
            Send
          </button>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </form>
    </div>
  );
}

export default UpdateId;
