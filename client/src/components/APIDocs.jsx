import React from "react";

const APIDocs = () => {
  return (
    <div className="min-h-screen bg-[#101828] text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold my-8 text-blue-400">
          Veritas API Documentation
        </h1>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Introduction
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The Veritas API allows developers to interact with the Veritas
            blockchain-based review system. This documentation provides a
            comprehensive guide on how to use the API to create, retrieve, and
            manage verified reviews. All reviews are stored immutably on the
            blockchain, ensuring transparency and trust.
          </p>
        </section>

        {/* Authentication Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Authentication
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            To use the Veritas API, you need an API key. Include your API key in
            the `Authorization` header of every request:
          </p>
          <pre className="bg-[#1E293B] p-4 rounded-lg text-sm text-gray-200 mb-4">
            {`Authorization: Bearer YOUR_API_KEY`}
          </pre>
          <p className="text-gray-300 leading-relaxed">
            You can obtain your API key by signing up on the Veritas platform.
          </p>
        </section>

        {/* Initialize Client Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Initialize the Client
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Before making any API calls, initialize the Veritas client with your
            API key and the desired network:
          </p>
          <pre className="bg-[#1E293B] p-4 rounded-lg text-sm text-gray-200 mb-4">
            {`const veritas = new VeritasClient({
  apiKey: 'YOUR_API_KEY', // Replace with your API key
  network: 'mainnet'      // Options: 'mainnet' or 'testnet'
});`}
          </pre>
        </section>

        {/* Post a Review Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Post a Verified Review
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            To post a new review, use the `create` method. Reviews are immutable
            once stored on the blockchain.
          </p>
          <pre className="bg-[#1E293B] p-4 rounded-lg text-sm text-gray-200 mb-4">
            {`const result = await veritas.reviews.create({
  productId: 'prod_123',   // Unique product ID
  rating: 4.5,             // Rating between 1 and 5
  reviewText: 'Amazing product!', // Review content
  authorId: 'user_456',    // Unique author ID
  metadata: {              // Optional metadata
    purchaseVerified: true,
    platform: 'mobile'
  }
});`}
          </pre>
          <p className="text-gray-300 leading-relaxed">
            The response will include a `transactionHash` that you can use to
            track the review on the blockchain.
          </p>
        </section>

        {/* Retrieve a Review Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Retrieve a Review
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            To fetch a review, use the `get` method with the review's
            transaction hash:
          </p>
          <pre className="bg-[#1E293B] p-4 rounded-lg text-sm text-gray-200 mb-4">
            {`const review = await veritas.reviews.get('0x123...abc');
console.log(review);`}
          </pre>
        </section>

        {/* Update Metadata Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Update Review Metadata
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            While reviews themselves are immutable, you can update their
            metadata:
          </p>
          <pre className="bg-[#1E293B] p-4 rounded-lg text-sm text-gray-200 mb-4">
            {`await veritas.reviews.updateMetadata('0x123...abc', {
  purchaseVerified: false,
  platform: 'desktop'
});`}
          </pre>
        </section>

        {/* Error Handling Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Error Handling
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Always handle errors gracefully. Common errors include:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Invalid API key</li>
            <li>Network issues</li>
            <li>Invalid input parameters</li>
          </ul>
          <pre className="bg-[#1E293B] p-4 rounded-lg text-sm text-gray-200 mb-4">
            {`try {
  const result = await veritas.reviews.create({ ... });
} catch (error) {
  console.error('Error:', error.message);
}`}
          </pre>
        </section>

        {/* Conclusion Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The Veritas API is designed to be simple yet powerful. By following
            this documentation, you can seamlessly integrate Veritas into your
            application and leverage the power of blockchain for transparent and
            trustworthy reviews.
          </p>
        </section>
      </div>
    </div>
  );
};

export default APIDocs;
