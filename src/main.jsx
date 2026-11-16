import React from "react";
import ReactDOM from "react-dom/client";
import { inject } from "@vercel/analytics";
import "./index.css";
import ShawnPortfolioHomepage from "./App.jsx";

inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShawnPortfolioHomepage />
  </React.StrictMode>
);
