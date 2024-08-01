import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const navListMenuItemsSupport = [
  {
    title: "Support",
    description: "Find the perfect solution for your needs.",
    link: "",
  },
  {
    title: "Solution",
    description: "Find the perfect solution for your needs.",
    link: "",
  },
  {
    title: "After Sales Service",
    description: "Find the perfect solution for your needs.",
    link: "/AfterSalesService",
  },
  {
    title: "AMC",
    description: "Find the perfect solution for your needs.",
    link: "/Amc",
  },
  {
    title: "Change Parts",
    description: "Find the perfect solution for your needs.",
    link: "/ChangeParts",
  },
  {
    title: "Training",
    description: "Find the perfect solution for your needs.",
    link: "/Training",
  },
];

const navListMenuItemsAbout = [
  {
    title: "Our Corporate",
    description: "",
    link: "/ourCorporate",
  },
  {
    title: "Partner",
    description: "",
    link: "/Partner",
  },
  {
    title: "Policy",
    description: "",
    link: "/Policy",
  },
  {
    title: "Support",
    description: "",
    link: "",
  },
];

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    link: "/portfolio",
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    link: "/About",
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    link: "",
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    link: "",
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    link: "",
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    link: "/ContactUs",
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    link: "",
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    link: "",
  },
];

const navListMenuProfile = [
  {
    title: "Dashboard",
    description: "Find the perfect solution for your needs.",
    link: "/dashboard",
  },
  {
    title: "Log Out",
    description: "Meet and learn about our dedication",
    link: "/login",
  },
];


const NavLinks = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, curr) => {
        acc[curr] = curr === key ? !prevState[curr] : false;
        return acc;
      }, {});
      return { ...newState, [key]: !prevState[key] };
    });
  };

  const renderNavLinks = (items) => {
    return items.map((item, index) => (
      <div key={index} className="relative">
        <button
          id={`dropdownNavbarLink${index}`}
          data-dropdown-toggle={`dropdownNavbar${index}`}
          className="flex items-center px-4 font-extrabold text-gray-500 hover:text-lime-600"
          onClick={() => toggleDropdown(`dropdown${index}`)}
        >
          {item.title}
          <svg
            className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
              dropdownOpen[`dropdown${index}`] ? "rotate-180" : ""
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
          className={`${
            dropdownOpen[`dropdown${index}`] ? "block" : "hidden"
          } fixed inset-x-0 mt-2 md:mt-4 lg:mt-5  p-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full`}
          style={{ zIndex: 100 }}
        >
          <div className="py-1 grid grid-cols-3">
            <Link
              to={item.link}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 col-span-1 w-full"
            >
              {item.title}
            </Link>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    ));
  };


  return (
    <div className=" flex lg:flex-row flex-col lg:items-center text-left  gap-3">
      
      
      
      <Link
        className="px-4 font-extrabold text-gray-500 hover:text-lime-600"
        to="/About"
      >
        About
      </Link>
      <Link
        className="px-4 font-extrabold text-gray-500 hover:text-lime-600"
        to="/ContactUs"
      >
        ContactUs
      </Link>
      
      {Object.entries(dropMenuNavList).map(([key, items], index) => (
        <div key={index} className="relative">
          <button
            id={`dropdownNavbarLink${index}`}
            data-dropdown-toggle={`dropdownNavbar${index}`}
            className="flex items-center px-4 font-extrabold text-gray-500 hover:text-lime-600"
            onClick={() => toggleDropdown(`dropdown${index}`)}
          >
            {key}
            <svg
              className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
                dropdownOpen[`dropdown${index}`] ? "rotate-180" : ""
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
            className={`${
              dropdownOpen[`dropdown${index}`] ? "block" : "hidden"
            } fixed inset-x-0 mt-2 md:mt-4 lg:mt-5 p-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full grid grid-cols-3`}
            style={{ zIndex: 100 }}
          >
            {items.map((item, itemIndex) => (
              <div key={itemIndex} className="py-1  col-span-1">
                <Link
                  to={item.link}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                >
                  {item.title}
                <p className="text-xs">{item.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Link
        className="text-white bg-lime-600 hover:bg-sky-600 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        smooth
        to="/EnquiryForm"
      >
        Enquiry
      </Link>
    </div>
  );
};

const dropMenuNavList = {
  // About: navListMenuItemsAbout,
  Support: navListMenuItemsSupport,
  // Products: navListMenuItems,
  Profile: navListMenuProfile
};

const NavBar = () => {
  const [top, setTop] = useState(!window.scrollY);
  const [isOpen, setisOpen] = React.useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${
        !top && "bg-white shadow-lg"
      }`}
    >
      <div className="flex flex-row justify-between items-center py-2">
        <div className="flex flex-row justify-center md:px-12 md:mx-12 items-start ">
          <Link to="/">
          <img src={Logo} className="h-16 w-24" />
          </Link>
        </div>
        <div className="group flex flex-col items-center">
          <button
            className="p-2 rounded-lg lg:hidden text-lime-600"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          <div className="hidden space-x-6 lg:inline-block p-5">
            <NavLinks />
          </div>

          <div
            className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md py-8 bg-white lg:hidden shadow-xl top-14 ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <div className="flex flex-col space-y-6">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
