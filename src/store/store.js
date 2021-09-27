import { configureStore } from "@reduxjs/toolkit";
import dummyReducer from "./dummyReducer";
import bookReducer from "../reducers/bookReducer";

const store = configureStore ({
    reducer: {books: bookReducer}
})

export default store;