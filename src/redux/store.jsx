import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import cartReducer from "./features/cartSlice";
import productReducer, { productsFetch } from "./features/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productReducer,
  },
});

store.dispatch(productsFetch());

const rootReducer = combineReducers({});

export default configureStore({ reducer: rootReducer });
