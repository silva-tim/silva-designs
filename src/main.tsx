import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import OrderContextProvider from "./lib/OrderContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <OrderContextProvider>
        <App />
      </OrderContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
