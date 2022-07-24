// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import toast, { Toaster } from "react-hot-toast";
// import { setProduct } from "../../../redux/actions/products";

function SearchBar() {
  // const dispatch = useDispatch();
  // const [input, setInput] = React.useState({
  //   search: "",
  // });
  // const { products } = useSelector((state) => state.searchBar);
  // console.log(products);

  // const handleOnChange = (e) => {
  //   e.preventDefault();
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <div>
      <form action="" className="home__search">
        <i className="bx bxs-map"></i>
        <input
          type="search"
          placeholder="Search for name..."
          className="home__search-input"
          autoComplete="off"
        />
        <button
          // disabled={!input.value}
          className="button"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
