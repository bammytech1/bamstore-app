import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// const rootReducer = combineReducers({

// });

// export default configureStore({ reducer: rootReducer });
