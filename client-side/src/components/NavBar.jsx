const NavBar = () => {
  return (
    <nav className="bg-slate-900 text-gray-300 flex justify-between px-6 py-4 z-10 ">
      <div className="bg-yellow-700 py-2 px-5 rounded-md">
        <p>My Shope</p>
      </div>
      <ul className="flex space-x-5 px-10 ">
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
        <p>the search part</p>
      </div>
    </nav>
  );
};

export default NavBar;
