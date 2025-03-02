import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const { product } = location.state;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handlePurchase = (e) => {
    e.preventDefault(); // Prevent form submission

    if (!name.trim() || !address.trim() || !phone.trim()) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    navigate("/success", { state: { product } });
  };

  return (
    <div className="h-[90vh] bg-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Payment Details
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Product Details */}
          <div className="w-full md:w-1/2 p-4 bg-gray-50 rounded-xl shadow-sm border-gray-100 border">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-4 text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-2xl font-bold text-green-600 mt-2">
              ${product.price}
            </p>
          </div>

          {/* Payment Form */}
          <div className="w-full md:w-1/2">
            <form className="space-y-5" onSubmit={handlePurchase}>
              <div>
                <label className="block text-gray-700 text-md font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label className="block text-md font-semibold">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-md font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white text-lg font-medium rounded-md transition-all duration-300 hover:bg-indigo-700 shadow-sm"
              >
                Confirm Purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
