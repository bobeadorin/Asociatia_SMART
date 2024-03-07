import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout/LayoutComponent/Layout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/Pages/AboutUs/main/AboutUs.jsx";
import BecomeVol from "./components/Pages/BecomeVol/main/BecomeVol.jsx";
import ContactUs from "./components/Pages/ContactUs/main/ContactUs.jsx";
import Donate from "./components/Pages/Dontate/main/Donate.jsx";
import HomePage from "./components/Pages/HomePage/main/HomePage.jsx";
import Projects from "./components/Pages/Projects/main/Projects.jsx";
import ConfidentialityPolicy from "./components/FooterLegalInfoPages/ConfidentialityPolicy/ConfidentialityPolicy.jsx";
import TermsAndConditions from "./components/FooterLegalInfoPages/TermsAndConditions/TermsAndConditions.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Layout>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutUs />} path="/DespreNoi" />
          <Route element={<BecomeVol />} path="/FiiVoluntar" />
          <Route element={<ContactUs />} path="/Contact" />
          <Route element={<Donate />} path="/Doneaza" />
          <Route element={<Projects />} path="/Proiecte" />
          <Route
            element={<ConfidentialityPolicy />}
            path="/PoliticaDeConfidentialitate"
          />
          <Route element={<TermsAndConditions />} path="/TermeniSiConditii" />
        </Routes>
      </Layout>
    </React.StrictMode>
  </BrowserRouter>
);
