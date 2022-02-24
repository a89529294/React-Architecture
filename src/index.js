import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { InitialDataContext } from "./InitialDataContext";

import "./index.css";

ReactDOM.hydrate(
  <React.StrictMode>
    <InitialDataContext.Provider
      value={(window && window.preloadedData) || { _data: {} }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InitialDataContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
