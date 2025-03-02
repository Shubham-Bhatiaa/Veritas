import React from "react";
import { FaCode, FaBook, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const APIIntegration = () => {
   const navigate = useNavigate();

   const handleGetStarted = () => {
     navigate("/api-docs"); // Navigate to the API documentation page
   };
  return (
    <div id="api-integration" className="py-16 bg-gray-900 bg-opacity-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Simple API Integration
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
            Get started with just a few lines of code. Our RESTful API makes it
            easy to add blockchain verification to your applications.
          </p>
        </div>

        <div className="mt-12">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700 p-8">
            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="flex justify-center">
                  <FaCode className="h-10 w-10 text-blue-500" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  RESTful Endpoints
                </h3>
                <p className="mt-2 text-gray-300">
                  Easy-to-use RESTful endpoints for all operations.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <FaBook className="h-10 w-10 text-purple-500" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  Detailed Documentation
                </h3>
                <p className="mt-2 text-gray-300">
                  Comprehensive guides and examples for seamless integration.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <FaCheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  SDKs Available
                </h3>
                <p className="mt-2 text-gray-300">
                  SDKs for popular languages: JavaScript, Python, Ruby.
                </p>
              </div>
            </div>

            {/* Code Example Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">API Example</h3>
              <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                <pre className="text-sm text-gray-300">
                  <code>
                    {`// Initialize the Veritas client\n`}
                    {`const veritas = new VeritasClient({\n`}
                    {`  apiKey: 'YOUR_API_KEY',\n`}
                    {`  network: 'mainnet'\n`}
                    {`});\n\n`}
                    {`// Post a new verified review\n`}
                    {`const result = await veritas.reviews.create({\n`}
                    {`  productId: 'prod_123',\n`}
                    {`  rating: 4.5,\n`}
                    {`  reviewText: 'Amazing product, highly recommend!',\n`}
                    {`  authorId: 'user_456',\n`}
                    {`  // Optional metadata\n`}
                    {`  metadata: {\n`}
                    {`    purchaseVerified: true,\n`}
                    {`    platform: 'mobile'\n`}
                    {`  }\n`}
                    {`});\n\n`}
                    {`// The review is now stored on the blockchain\n`}
                    {`console.log(\`Review stored with hash: \${result.transactionHash}\`);`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Call-to-Action Section */}
            <div onClick={handleGetStarted} className="mt-8 text-center">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                <FaBook className="mr-2" />
                View API Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIIntegration;
