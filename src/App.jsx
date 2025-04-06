import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Solution from "./pages/Solution";
import AuthState from "./context/authContext/AuthState";
import PublicRoutes from "./utils/PublicRoutes";
import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";

import AdminRoutes from "./pages/admin/AdminRoutes";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("GreenTech - Bespoke Web and Mobile Applications");

  return (
    <>
      <AuthState>
        <ScrollToTop>
          {/* <NavBar /> */}
          <Toaster />

          <Routes>
            <Route
              path="/"
              element={
                <PublicRoutes>
                  <Home />
                </PublicRoutes>
              }
            />
            <Route
              path="/products"
              element={
                <PublicRoutes>
                  <Products />
                </PublicRoutes>
              }
            />
            <Route
              path="/ContactUs"
              element={
                <PublicRoutes>
                  <Contact />
                </PublicRoutes>
              }
            />
            <Route
              path="/support"
              element={
                <PublicRoutes>
                  <Support />
                </PublicRoutes>
              }
            />
            <Route
              path="/solution"
              element={
                <PublicRoutes>
                  <Solution />
                </PublicRoutes>
              }
            />
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="AboutUs" element={<AboutUs />} />
            {/* <Route path="/EnquiryForm  " element={<Support />} /> */}

            <Route
              path="/Login"
              element={
                <PublicRoutes restricted>
                  <Login />
                </PublicRoutes>
              }
            />
          </Routes>
        </ScrollToTop>
      </AuthState>
    </>
  );
}

export default App;
