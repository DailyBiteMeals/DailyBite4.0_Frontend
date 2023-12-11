import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DailybiteLogo from "./../../assets/Logo/DailyBite_logo.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow px-4 md:px-20 bg-white/50 backdrop-opacity-10 backdrop-invert">
      <nav className="py-2.5 font-ExtraCondensedSemiBold bg-opacity-10 backdrop-blur-sm">
        <div className="flex flex-row flex-wrap justify-between items-center max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={DailybiteLogo} className="h-12" alt="Dailybite Logo" />
          </Link>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="block text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex md:items-center w-full md:w-auto md:order-1 mt-4 md:mt-0 md:text-xl`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0">
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="text-mainOrange"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-mainOrange" : "text-gray-900"
                    } block py-2 pr-4 pl-3 duration-200 border-b border-DailyBiteGray hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-mainOrange active:text-mainOrange md:p-0`
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products"
                  activeClassName="text-mainOrange"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-mainOrange" : "text-gray-900"
                    } block py-2 pr-4 pl-3 duration-200 border-b border-DailyBiteGray hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-mainOrange active:text-mainOrange md:p-0`
                  }
                  onClick={closeMobileMenu}
                >
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  activeClassName="text-mainOrange"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-mainOrange" : "text-gray-900"
                    } block py-2 pr-4 pl-3 duration-200 border-b border-DailyBiteGray hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-mainOrange active:text-mainOrange md:p-0`
                  }
                  onClick={closeMobileMenu}
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  activeClassName="text-mainOrange"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-mainOrange" : "text-gray-900"
                    } block py-2 pr-4 pl-3 duration-200 border-b border-DailyBiteGray hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-mainOrange active:text-mainOrange md:p-0`
                  }
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </NavLink>
              </li>

              {/* <li>
                <NavLink
                  to="/blogs"
                  activeClassName="text-mainOrange"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-mainOrange" : "text-gray-900"
                    } block py-2 pr-4 pl-3 duration-200 border-b border-DailyBiteGray hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-mainOrange active:text-mainOrange md:p-0`
                  }
                  onClick={closeMobileMenu}
                >
                  Blogs
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
