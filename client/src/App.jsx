import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correctly import Routes and Route
import { ethers } from "ethers";
import { messageStoreABI, MESSAGE_STORE_ADDRESS } from "./abi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ReviewSystem from "./components/ReviewSystem";
import APIIntegration from "./components/APIIntegration";
import APIDocs from "./components/APIDocs"; // Import the APIDocs component

const App = () => {
  const [account, setAccount] = useState(null);
  const [message, setMessage] = useState("");
  const [storedMessage, setStoredMessage] = useState("");
  const [showConnectSuccess, setShowConnectSuccess] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setShowConnectSuccess(true);
        setTimeout(() => setShowConnectSuccess(false), 3000);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask not detected!");
    }
  };

  const fetchMessage = async () => {
    if (!account) return;
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(
        MESSAGE_STORE_ADDRESS,
        messageStoreABI,
        provider
      );
      const fetchedMessage = await contract.getMessage();
      setStoredMessage(fetchedMessage);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  const updateMessage = async () => {
    if (!message) return alert("Enter a message");
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        MESSAGE_STORE_ADDRESS,
        messageStoreABI,
        signer
      );

      const tx = await contract.setMessage(message);
      await tx.wait();
      setMessage("");
      fetchMessage();
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  useEffect(() => {
    if (account) fetchMessage();
  }, [account]);

  const truncateAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        <Navbar
          account={account}
          connectWallet={connectWallet}
          truncateAddress={truncateAddress}
          showConnectSuccess={showConnectSuccess}
        />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Demo
                  account={account}
                  connectWallet={connectWallet}
                  message={message}
                  setMessage={setMessage}
                  storedMessage={storedMessage}
                  fetchMessage={fetchMessage}
                  updateMessage={updateMessage}
                  truncateAddress={truncateAddress}
                />
                <ReviewSystem />
                <APIIntegration />
                <Pricing />
                <CTA />
              </>
            }
          />
          {/* API Documentation Route */}
          <Route path="/api-docs" element={<APIDocs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
