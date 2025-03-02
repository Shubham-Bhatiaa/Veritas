import React from "react";
import { motion } from "framer-motion";
import { FaEthereum } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Trusted Blockchain Verified Reviews
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              "Empowering Trust Through Decentralized, Immutable, and
              Transparent Reviews for Next-Gen Users."
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#demo"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Try Demo
              </a>
              <a
                href="#pricing"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
              >
                View Pricing
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-64 md:h-80 lg:h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transform rotate-2 opacity-20"></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-gray-800 bg-opacity-70 border border-gray-700 rounded-lg p-6 transform -rotate-2">
                <div className="h-6 flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-gray-300">
                      INegrate your merchant site
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-gray-300">
                      get genuine reviews stored on blockchain
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-blue-400">Reviews received: </span>
                  </div>
                  <div className="pl-6 text-yellow-300">
                    "Excellent quality and totally worth it! 🔥"
                  </div>
                  <div className="flex">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-gray-300">
                      Show new users blockchain based genuine reviews
                    </span>
                  </div>
                  <div className="flex animate-pulse">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-gray-300">_</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
