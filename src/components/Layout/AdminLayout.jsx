
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import AuthContext from "../../context/authContext/AuthContext";

const AdminLayout = ({ children, title = "Admin" }) => {
  const [dropdownOpen, setDropdownOpen] = useState({});
  const { Logout, isLogin } = useContext(AuthContext);

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };


  return (
    <div>
      <div className="p-4  gap-5 shadow-md flex justify-between">
        <div className="flex flex-row h-fit">
        <Link to="/">
            <img src={Logo} className="h-16 w-28 md:h-24 md:w-36" alt="Logo" />
          </Link>
          <h1 className="text-xl font-semibold px-4 my-auto">{title}</h1>
        </div>
        <div className="flex  flex-row my-auto ">
          <Link className="px-4 font-extrabold text-gray-500 hover:text-lime-600" to="/admin/products">
          Products
          </Link>
          <Link className="px-4 font-extrabold text-gray-500 hover:text-lime-600" to="/admin/category">
          Category
          </Link>
          <Link className="px-4 font-extrabold text-gray-500 hover:text-lime-600" to="/admin/cardList">
            Cards
          </Link>
          <Link className="px-4 font-extrabold text-gray-500 hover:text-lime-600" to="/admin/carousel">
            Carousel
          </Link>
          <button
                className="px-4 font-extrabold text-gray-500 hover:text-red-600"
                onClick={Logout}
              >
                Log Out
              </button>
          {/* <div className="relative">
            <button
              id={`dropdownNavbarLinkProfile`}
              data-dropdown-toggle={`dropdownNavbarProfile`}
              className="flex items-center px-4 font-extrabold text-gray-500 hover:text-lime-600"
              onClick={() => toggleDropdown(`dropdownProfile`)}
            >
              Profile
              <svg
                className={`w-2.5 h-2.5 ms-2.5 transition-transform ${dropdownOpen[`dropdownProfile`] ? "rotate-180" : ""
                  }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              className={`${dropdownOpen[`dropdownProfile`] ? "block" : "hidden"
                } fixed inset-x-0 mt-2 md:mt-4 lg:mt-5 p-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full grid grid-cols-3`}
              style={{ zIndex: 100 }}
            >
              <Link
                to="/admin/cardList"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
              >
                Admin
              </Link>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                onClick={Logout}
              >
                Log Out
              </button>
            </div>
            </div> */}
        </div>
      </div>

      <main style={{ minHeight: "70vh" }}>{children}</main>

    </div>
  );
};

export default AdminLayout;