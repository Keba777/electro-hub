import Logo from "../assets/logo/logo.png";

const NavBar = () => {
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
      <div className="py-4">
        <p>the search part</p>
      </div>
    </nav>
  );
};

export default NavBar;
