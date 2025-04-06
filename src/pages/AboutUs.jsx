/** @format */

import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar/NewNav";
import React, { useRef, useState } from "react";

const AboutUs = () => {
  // State to handle content expansion
  const [isExpanded, setIsExpanded] = useState(false);

  const aboutUsRef = useRef(null); // Create a reference to the component

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);

    // Scroll to the top of the "About Us" section when expanded
    if (!isExpanded) {
      setTimeout(() => {
        aboutUsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300); // Adjust the delay as per the animation timing
    }
  };

  return (
    <>
      <NavBar />
      <div className='bg-gray-100 min-h-screen flex items-center justify-center p-5 pt-32 overflow-y-auto'>
        <div className='bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 lg:w-2/3'>
          {/* Hero Section */}
          <div className='relative'>
            <img
              src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=2000&q=80'
              alt='About Us'
              className='w-full h-64 object-cover'
            />
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6'>
              <h1 className='text-4xl font-bold md:text-5xl mb-4 animate-fade-down'>
                About Us
              </h1>
              <p className='text-lg md:text-xl animate-fade-up'>
                We strive to deliver the best service with a focus on quality
                and innovation.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className='p-8 space-y-6'>
            <h2 className='text-3xl font-bold text-lime-600 text-center mb-4 animate-slide-in-left'>
              Our Mission
            </h2>
            <p className='text-gray-600 text-lg leading-relaxed animate-slide-in-right'>
              Our mission is to provide excellent service and create remarkable
              experiences for our clients. We believe in pushing the boundaries
              of what's possible through innovation, commitment, and
              collaboration.
            </p>
            <p className='text-gray-600 text-lg leading-relaxed animate-slide-in-left'>
              From the very beginning, we've worked hard to establish ourselves
              as industry leaders. Our team is passionate, dedicated, and always
              willing to go the extra mile to meet the needs of our customers.
            </p>

            {/* Extra content revealed on button click */}
            {isExpanded && (
              <div className='animate-slide-in-up'>
                <h3 className='text-2xl font-semibold text-lime-600 mt-6'>
                  Our Vision
                </h3>
                <p className='text-gray-600 text-lg leading-relaxed'>
                  We envision a future where innovation leads to meaningful
                  change, not just for our customers, but for the industry as a
                  whole. We are driven to make an impact by creating sustainable
                  solutions and focusing on long-term growth for everyone
                  involved.
                </p>
                <h3 className='text-2xl font-semibold text-lime-600 mt-6'>
                  Our Values
                </h3>
                <ul className='list-disc list-inside text-gray-600 text-lg'>
                  <li>Customer-Centric</li>
                  <li>Integrity and Transparency</li>
                  <li>Continuous Innovation</li>
                  <li>Collaboration and Teamwork</li>
                </ul>
              </div>
            )}

            {/* Toggle button for showing/hiding more content */}
            <div className='flex justify-center mt-8'>
              <button
                className='bg-lime-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-lime-500 transition-colors duration-300'
                onClick={toggleExpanded}
              >
                {isExpanded ? "Show Less" : "Learn More"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
