import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const Pricing = () => {
  return (
    <div id="pricing" className="py-16 bg-gray-900 bg-opacity-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Choose the plan that works best for your needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700"
          >
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-white">Basic</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-white">$9</span>
                <span className="ml-1 text-xl font-medium text-gray-400">
                  /month
                </span>
              </div>
              <p className="mt-5 text-gray-300">Perfect for small merchants.</p>
            </div>
            <div className="px-6 pt-2 pb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="ml-3 text-gray-300">
                    Up to 100 product reviews per month
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="ml-3 text-gray-300">Basic analytics</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="ml-3 text-gray-300">Email support</p>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-b from-blue-900 to-gray-800 rounded-lg overflow-hidden shadow-xl border border-blue-500 transform scale-105"
          >
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-white">Professional</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-white">$29</span>
                <span className="ml-1 text-xl font-medium text-gray-300">
                  /month
                </span>
              </div>
              <p className="mt-5 text-gray-200">
                Ideal for businesses and growing startups.
              </p>
            </div>
            <div className="px-6 pt-2 pb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="ml-3 text-gray-200">
                    Up to 1000 product reviews per month
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="ml-3 text-gray-200">Advanced analytics</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="ml-3 text-gray-200">Priority support</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="ml-3 text-gray-200">Custom integrations</p>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 shadow-lg"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700"
          >
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-white">Enterprise</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-white">$99</span>
                <span className="ml-1 text-xl font-medium text-gray-400">
                  /month
                </span>
              </div>
              <p className="mt-5 text-gray-300">
                Unlimited product reviews per month
              </p>
            </div>
            <div className="px-6 pt-2 pb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="ml-3 text-gray-300">Unlimited everything</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="ml-3 text-gray-300">
                    Dedicated account manager
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="ml-3 text-gray-300">24/7 phone support</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiCheck className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="ml-3 text-gray-300">
                    Advanced security features
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="block w-full text-center px-4 py-2 border border-blue-400 text-sm font-medium rounded-md text-blue-400 bg-transparent hover:bg-blue-600 hover:text-white hover:border-transparent"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
