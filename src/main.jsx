import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import LandingPage from "./pages/landing-page/LandingPage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <LandingPage />
  </React.StrictMode>
);
