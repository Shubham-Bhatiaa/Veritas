import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container  mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
