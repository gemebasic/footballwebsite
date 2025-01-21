"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    matchInfo: false,
    players: false,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Toggle main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Brand */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 text-center sm:text-left">
              <Link href="/">
                <span className="text-white text-2xl font-bold cursor-pointer">
                  Sports Magazine
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link href="/">
                <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Home
                </span>
              </Link>

              <div
                className="relative"
                onMouseEnter={() =>
                  setIsDropdownOpen((prevState) => ({
                    ...prevState,
                    matchInfo: true,
                  }))
                }
                onMouseLeave={() =>
                  setIsDropdownOpen((prevState) => ({
                    ...prevState,
                    matchInfo: false,
                  }))
                }
              >
                <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Match Info
                </span>
                {isDropdownOpen.matchInfo && (
                  <div className="absolute left-0 mt-0 w-48 bg-slate-800 text-white rounded-md shadow-lg">
                    <Link href="/match-info/fixture">
                      <span className="text-white block px-3 py-2 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
                        Fixture
                      </span>
                    </Link>
                    <Link href="/match-info/result">
                      <span className="text-white block px-3 py-2 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
                        Match Result
                      </span>
                    </Link>
                    <Link href="/match-info/table">
                      <span className="text-white block px-3 py-2 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
                        Table
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() =>
                  setIsDropdownOpen((prevState) => ({
                    ...prevState,
                    players: true,
                  }))
                }
                onMouseLeave={() =>
                  setIsDropdownOpen((prevState) => ({
                    ...prevState,
                    players: false,
                  }))
                }
              >
                <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Players
                </span>
                {isDropdownOpen.players && (
                  <div className="absolute left-0 mt-0 w-48 bg-slate-800 text-white rounded-md shadow-lg">
                    <Link href="/players/men">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer">
                        Men
                      </span>
                    </Link>
                    <Link href="/players/women">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer">
                        Women
                      </span>
                    </Link>
                    <Link href="/players/academy">
                      <span className="block px-4 py-2 text-sm hover:bg-gray-700 cursor-pointer">
                        Academy
                      </span>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/news">
                <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Our News
                </span>
              </Link>
              <Link href="/shop">
                <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Our Shop
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/">
            <span className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Home
            </span>
          </Link>
          <div>
            <span className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Match Info
            </span>
            <div className="pl-4">
              <Link href="/match-info/fixture">
                <span className="text-white block px-3 py-2 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
                  Fixture
                </span>
              </Link>
              <Link href="/match-info/result">
                <span className="text-white block px-3 py-2 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
                  Match Result
                </span>
              </Link>
              <Link href="/match-info/table">
                <span className="text-white block px-3 py-2 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
                  Table
                </span>
              </Link>
            </div>
          </div>
          <div>
            <span className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Players
            </span>
            <div className="pl-4">
              <Link href="/players/men">
                <span className="text-white block px-3 py-2 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
                  Men
                </span>
              </Link>
              <Link href="/players/women">
                <span className="text-white block px-3 py-2 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
                  Women
                </span>
              </Link>
              <Link href="/players/academy">
                <span className="text-white block px-3 py-2 rounded-md text-sm hover:bg-gray-700 cursor-pointer">
                  Academy
                </span>
              </Link>
            </div>
          </div>
          <Link href="/news">
            <span className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Our News
            </span>
          </Link>
          <Link href="/shop">
            <span className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Our Shop
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
