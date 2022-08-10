import React, { useEffect, useMemo } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function CreateBrand() {
  const [input, setInput] = React.useState({
    name: "",
    logo_url: "",
  });

  const urlRegEx = useMemo(() => new RegExp("https?://.*.(?:png|jpg)"), []);
  const validate = (input) => {
    let error = {};
    if (!input.name || input.name.length < 3) {
      error.name = "¡Name is required and must be at least 3 characters!";
    } else if (!input.logo_url || !urlRegEx.test(input.logo_url)) {
      error.logo_url = "¡Image URL is required and must be a valid URL!";
    }
    return error;
  };

  const [error, setError] = React.useState({});

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
      name: "",
      logo_url: "",
    });

    if (!error.name && !error.logo_url) {
      toast.promise(
        axios.post("/brands", {
          name: input.name,
          logo_url: input.logo_url,
        }),
        {
          loading: "Loading...",
          success: "Brand created successfully!",
          error: "Error creating Brand, try again!",
        }
      );
    } else {
      setInput({
        name: "",
        logo_url: "",
      });
      toast.error("¡Please fill all the fields!");
    }
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

  return (
    <div className="section">
      <form action="/" method="POST" className="contact__form" type="submit">
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
            name="logo_url"
            type="text"
            placeholder="Insert brand image url"
            className="contact__form-input"
            onChange={handleOnChange}
            value={input.logo_url}
            autoComplete="off"
            required={true}
          />
          {error.logo_url && <p className="danger">{error.logo_url}</p>}
        </div>

        <div className="wrap">
          <button
            className="buttonSend but"
            type="submit"
            onClick={(e) => handleSubmit(e)}
            disabled={!input.name || !input.logo_url}
          >
            Send
          </button>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </form>
    </div>
  );
}

export default CreateBrand;
