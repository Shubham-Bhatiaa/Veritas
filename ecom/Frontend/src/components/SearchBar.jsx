import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="flex justify-center shadow-md gap-3 focus:ring-blue-500 focus:outline-none transition-all duration-300 items-center p-3 pl-5 w-full my-5 max-w-md mx-auto border border-gray-300 rounded-lg  focus:ring-2">
      <label htmlFor="Search">
        <FaSearch size={24} className=" text-gray-400" />
      </label>
      <input
        id="Search"
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full outline-none text-gray-600 font-semibold  text-lg  "
      />
    </div>
  );
};

export default SearchBar;
