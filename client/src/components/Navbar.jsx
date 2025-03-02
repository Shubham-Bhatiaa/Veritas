import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { SiBlockchaindotcom } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

const Navbar = ({
  account,
  connectWallet,
  truncateAddress,
  showConnectSuccess
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 bg-opacity-70 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="flex items-center font-bold text-xl">
                <SiBlockchaindotcom className="h-8 w-8 text-blue-400 mr-2" />
                Veritas
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#features"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#demo"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  Demo
                </a>
                <a
                  href="#pricing"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                >
                  Pricing
                </a>
                <a
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white cursor-pointer"
                  onClick={() =>
                    (window.location.href = "http://localhost:5174/")
                  }
                >
                  <div className="flex items-center gap-2">
                    Analyse reviews
                    <FaExternalLinkAlt />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {account ? (
              <div className="flex items-center">
                <span className="bg-gray-800 text-green-400 px-4 py-2 rounded-full text-sm mr-2">
                  {truncateAddress(account)}
                </span>
                {showConnectSuccess && (
                  <span className="absolute top-16 right-4 bg-green-500 text-white px-4 py-2 rounded-md">
                    Successfully connected!
                  </span>
                )}
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <SiBlockchaindotcom className="mr-2" /> Connect Wallet
              </button>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
              >
                Features
              </a>
              <a
                href="#demo"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
              >
                Demo
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white"
              >
                Pricing
              </a>
              {!account && (
                <button
                  onClick={connectWallet}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
