import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <nav className="bg-white  sticky top-0 p-4 shadow-lg h-[10vh] border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl flex items-center gap-3 font-semibold text-zinc-900 sm:text-4xl ml-2 sm:ml-10 sm:font-extrabold  hover:text-gray-600 transition duration-300"
        >
          GreatCart
          <BsCartCheck color="white" size={44} className="bg-blue-500 p-1.5 rounded-md font-extrabold" />
        </Link>

        <div className="flex items-center space-x-10">
          <Link
            to="/"
            className="text-lg font-medium  text-white bg-indigo-600 px-5 py-2 rounded-md shadow-lg transition duration-300 hover:bg-indigo-500"
          >
            Home
          </Link>
          <button
            onClick={handleLogout}
            className="text-lg font-medium bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-300 shadow-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
