import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import ProductsProvidor from "./context/products-context";
import configureStore from "./hooks-store/products-store";

configureStore();
ReactDOM.render(
  // <ProductsProvidor>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ProductsProvidor>,
  document.getElementById("root")
);
