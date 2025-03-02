import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiDatabase, FiLock } from "react-icons/fi";

const Features = () => {
  return (
    <div id="features" className="py-16 bg-gray-900 bg-opacity-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Why Choose Veritas?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Our platform provides enterprise-grade blockchain functionality with
            consumer-level simplicity.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <div className="h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center mb-4">
                <FiShield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Secure Storage</h3>
              <p className="mt-4 text-gray-300">
                All reviews are securely stored on the Ethereum blockchain,
                ensuring immutability and transparency.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <div className="h-12 w-12 rounded-md bg-purple-500 flex items-center justify-center mb-4">
                <FiDatabase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Decentralized</h3>
              <p className="mt-4 text-gray-300">
                No central authority controls your data. Access your reviews
                from anywhere in the world.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <div className="h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center mb-4">
                <FiLock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Private Access</h3>
              <p className="mt-4 text-gray-300">
                Merchants and users can only read the reviews on the site and can't temper them.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
