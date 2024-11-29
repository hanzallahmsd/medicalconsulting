import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = ({ handleMouseEnter, handleMouseLeave, isDropdownVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white" style={{ backgroundColor: "#237fb7", zIndex: 1000 }}>
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative z-50">
        <div className="flex gap-6">
        <div className="text-2xl font-semibold">
          <Link to="/" className="text-white">
            UMCG
          </Link>
          </div>
            {/* Mobile Hamburger Icon */}
        <div className="lg:hidden ">
          <button
            className="text-white pt-1"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      
        </div>

      

        {/* Main Navigation */}
        <ul
          className={`lg:flex space-x-6 ${isMenuOpen ? "flex flex-col  absolute top-16 left-0 w-48 bg-[#237fb7] py-4" : "hidden"}`}
          style={{ zIndex: 999 }}
        >
          <li className="py-2 pl-6">
            <Link to="/" className="text-white font-bold hover:text-gray-300">
              Home
            </Link>
          </li>

          <li 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
             <Link to="/services" className="flex items-center text-white font-bold hover:text-gray-300 cursor-pointer py-2">
            <span> Services</span>
              <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-sm" />   </Link>
           
           
            {isDropdownVisible && (
              <ul
                className="absolute left-0 w-60 rounded shadow-lg opacity-100 transition-opacity duration-200"
                style={{ backgroundColor: "#237fb7", zIndex: 999 }}
              >
                <li>
                  <Link
                    to="/services/minor-ailments"
                    className="block px-4 py-2 text-white hover:text-gray-300"
                  >
                    Minor Ailments
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/medschecks"
                    className="block px-4 py-2 text-white hover:text-gray-300"
                  >
                    MedsChecks
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/injection-services"
                    className="block px-4 py-2 text-white hover:text-gray-300"
                  >
                    Injection Services
                  </Link>
                </li>
                <li>
                <Link
                  to="/services/smoking-cessation"
                  className="block px-4 py-2 text-white hover:text-gray-300"
                >
                  Smoking Cessation Program
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cardiovascular-program"
                  className="block px-4 py-2 text-white hover:text-gray-300"
                >
                  Cardiovascular Program
                </Link>
              </li>
              <li>
                <Link
                  to="/services/diabetic-education"
                  className="block px-4 py-2 text-white hover:text-gray-300"
                >
                  Diabetic Education
                </Link>
              </li>
              <li>
                <Link
                  to="/services/bookkeeping"
                  className="block px-4 py-2 text-white hover:text-gray-300"
                >
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  to="/services/naloxone-kit"
                  className="block px-4 py-2 text-white hover:text-gray-300"
                >
                  Naloxone Kit
                </Link>
              </li>
              <li>
                <Link
                  to="/services/prescriptions-delivery"
                  className="block px-4 py-2 text-white hover:text-gray-300"
                >
                  Prescriptions Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/services/new-pharmacy-model"
                  className="block px-4 py-2 text-white hover:text-gray-300"
                >
                  New Pharmacy Model
                </Link>
              </li>
              <li>
                <Link
                  to="/services/wholesale"
                  className="block px-4 py-2 text-white hover:text-gray-300"
                >
                  Wholesale
                </Link>
              </li>
              <li>
                <Link
                  to="/services/real-estate"
                  className="block px-4 py-2 text-white hover:text-gray-300"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  to="/services/compound-medication"
                  className="block px-4 py-2 text-white hover:text-gray-300"
                >
                  Compound Medication
                </Link>
              </li>
  
              </ul>
            )}
          </li>

          <li className="py-2">
            <Link
              to="/about-us"
              className="text-white font-bold hover:text-gray-300"
            >
              About Us
            </Link>
          </li>
          <li className="py-2">
            <Link
              to="/contact-us"
              className="text-white font-bold hover:text-gray-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Book Appointment Button */}
        <div className="ml-6">
          <Link
            to="/services"
            className="text-white text-sm font-bold px-4 py-3 border border-white transition-all uppercase"
            style={{ backgroundColor: "#f49e1e" }}
          >
            Book Appointment
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
