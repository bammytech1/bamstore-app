import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { setHeaders } from "./auth/api";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/product/`;

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(API_URL + "products");
    return response?.data;
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (values) => {
    try {
      const response = await axios.post(
        API_URL + "createProduct",
        values,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [createProduct.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [createProduct.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Product created");
    },
    [createProduct.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
  },
});

export default productSlice.reducer;
