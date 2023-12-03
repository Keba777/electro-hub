import Logo from "../assets/logo/logo.png";
import { BsCart3 } from "react-icons/bs";

const NavBar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav className="bg-slate-900 text-gray-300 flex justify-between px-6  z-10 ">
      <div className="rounded-full flex items-center justify-center ">
        <img src={Logo} alt="logo" className="w-14 h-14 rounded-full " />
        <p className="font-bold text-2xl">
          {" "}
          <span className="text-yellow-600">Electro</span>
          <span className="text-red-500">Hub</span>
        </p>
      </div>

      <ul className="flex space-x-5 px-10 py-4">
        <li className="hover:bg-slate-800 py-2 px-5 rounded-md">
          <a href="#">Home</a>
        </li>
        <li className="hover:bg-slate-800 py-2 px-5 rounded-md">
          <a href="#">About Us</a>
        </li>
        <li className="hover:bg-slate-800 py-2 px-5 rounded-md">
          <a href="#">Services</a>
        </li>
        <li className="hover:bg-slate-800 py-2 px-5 rounded-md">
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className="">
        <span className="bg-transparent hover:bg-slate-950 w-8 h-8 ps-1 pt-1 rounded-full cursor-pointer">
          <BsCart3 color="#D97706" className="w-6 h-6 " />
        </span>
        <button
          onClick={handleLogout}
          className="bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-2 text-white font-bold"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
