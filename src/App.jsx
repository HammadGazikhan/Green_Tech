import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import AuthState from "./context/authContext/AuthState";
import PublicRoutes from "./utils/PublicRoutes";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';

function App() {

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("LCS | LCS - Bespoke Web and Mobile Applications");



  return (
    <>
      <AuthState>
        <ScrollToTop>
          {/* <NavBar /> */}

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
              path="/ContactUs"
              element={
                <PublicRoutes>
                  <Contact />
                </PublicRoutes>
              }
            />
            {/* <Route path="/EnquiryForm  " element={<DemoProduct />} /> */}

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
