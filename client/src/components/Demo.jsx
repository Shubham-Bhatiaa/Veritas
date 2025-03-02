import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Demo = ({
  account,
  connectWallet,
  message,
  setMessage,
  storedMessage,
  fetchMessage,
  updateMessage,
  truncateAddress
}) => {
  return (
    <div id="demo" className="py-16 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-40 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-40 right-40 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Try It Yourself
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Connect your wallet and start storing your first review on the blockchain.
          </p>
        </div>

        <div className="mt-12">
          <div className="max-w-lg mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700">
            <div className="px-4 py-5 sm:p-6">
              {!account ? (
                <div className="text-center py-8">
                  <FaEthereum className="mx-auto h-16 w-16 text-gray-400" />
                  <h3 className="mt-2 text-xl font-medium text-white">
                    Connect Your Wallet
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    Connect with MetaMask to access the blockchain demo.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={connectWallet}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                      <FaEthereum className="mr-2" /> Connect Wallet
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-4 p-3 bg-gray-700 rounded-md flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-300">
                      Connected Wallet
                    </span>
                    <span className="text-sm font-medium text-green-400">
                      {truncateAddress(account)}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Your Review
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="message"
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter a review to store on the blockchain"
                        />
                        <button
                          type="button"
                          onClick={updateMessage}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 ml-3"
                        >
                          <FiSend className="mr-2" /> Save
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-300">
                          Current Stored Review
                        </h3>
                        <button
                          onClick={fetchMessage}
                          className="text-xs text-blue-400 hover:text-blue-300"
                        >
                          Refresh
                        </button>
                      </div>
                      <div className="mt-1 p-4 bg-gray-900 rounded-md min-h-12 break-words">
                        {storedMessage ? (
                          <p className="text-yellow-300">"{storedMessage}"</p>
                        ) : (
                          <p className="text-gray-400 italic">
                            No Reviews stored yet
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
