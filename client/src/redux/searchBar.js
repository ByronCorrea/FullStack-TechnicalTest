import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: {
    id: "",
    name: "",
    price: "",
    description: "",
    img_url: "",
    brand: "",
  },
  products: [],
  brands: [],
  popularProducts: [],
};

export const fetchAllProduts = () => async (dispatch) => {
  try {
    await axios
      .get("/products")
      .then((res) => dispatch(setProductsList(res.data)));
    axios.get("/brands").then((res) => dispatch(setBrandsList(res.data)));
  } catch (err) {
    console.log(err);
  }
};

export const fetchProductById = (id) => async (dispatch) => {
  try {
    await axios
      .get(`/products/${id}`)
      .then((res) => dispatch(setProduct(res.data)));
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/products/${id}`);
    dispatch(fetchAllProduts());
  } catch (err) {
    console.log(err);
  }
};

export const seachBar = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    setProductsList: (state, { payload }) => {
      state.products = payload;
    },
    setPopularProducts: (state, action) => {
      state.popularProducts = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setBrandsList: (state, { payload }) => {
      state.brands = payload;
    },
    clearProduct: (state) => {
      state.product = initialState.product;
    },
    clearProducts: (state) => {
      state.products = initialState.products;
    },
  },
});

export const {
  setProductsList,
  setBrandsList,
  setPopularProducts,
  setProduct,
  clearProduct,
  clearProducts,
} = seachBar.actions;

export default seachBar.reducer;
