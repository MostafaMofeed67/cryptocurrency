import { configureStore } from "@reduxjs/toolkit";
import cryptoApi from "./CryptoApi";
import cryptoNewsApi from "./CryptoNewsApi";

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});

export default store;
