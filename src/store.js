import { configureStore } from "@reduxjs/toolkit";

import balanceReducer from "./features/balance/balanceSlice";

export default configureStore({
  reducer: {
    balance: balanceReducer,
  },
});
