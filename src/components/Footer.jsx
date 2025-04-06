import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="mt-12 md:-mt-16 xl:mt-24">
        <div className="footer mt-8 2xl:px-60 xl:px-16 max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          <div className="my-10 mx-5 ">
            <div className="box-border border-b-4 border-lime-600 p-4 bg-gray-200 text-gray-600 text-center rounded-lg  mx-auto">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1892.3083227578627!2d73.8937686551263!3d18.45570699640453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI3JzIwLjYiTiA3M8KwNTMnNDEuOCJF!5e0!3m2!1sen!2sin!4v1729770534680!5m2!1sen!2sin"
                className="w-full h-64"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 ml-7 mx-auto">
              <h6 className="text-lime-600 text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* 2nd block */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 ml-7 mx-auto">
              <h6 className="text-lime-600 text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 ml-7 mx-auto">
              <h6 className="text-lime-600 text-xl font-bold mb-4">
                OUR SERVICES
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Domain and Hosting
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    General IT Consultations
                  </Link>
                </li>
              </ul>
            </div>
            {/* 4rd block */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 ml-7 mx-auto">
              <h6 className="text-lime-600 text-xl font-bold mb-4">
                OUR SERVICES
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Domain and Hosting
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-lime-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    General IT Consultations
                  </Link>
                </li>
              </ul>
            </div>

            {/* 5th block */}
            <div className="col-span-12 text-center mx-auto  font-bold uppercase text-lime-600">
              <div className="text-xl mb-6">Social Media Links.</div>

              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <Link
                      to="#"
                      className="flex justify-center items-center text-lime-600 hover:text-sky-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                      </svg>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex justify-center items-center text-lime-600 hover:text-sky-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <Link to="/" className=" text-sky-600 hover:text-lime-600">
                  LCS & Green
                </Link>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
