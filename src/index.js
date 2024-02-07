import React from "react";
import "./index.css";
import "./style.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import DataContextProvider from "./context/dataContext";

const root = createRoot(document.getElementById("root"));
// Call make Server
makeServer();

root.render(
  <Router>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </Router>
);
