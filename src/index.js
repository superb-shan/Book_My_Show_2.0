import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import MovieProvider from "./context/Movie.context";
import NavbarProvider from "./context/Navbar.context";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarProvider>
        <MovieProvider>
          <App />
          <ToastContainer /> 
        </MovieProvider>
      </NavbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
