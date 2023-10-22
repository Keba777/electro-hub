import { BsTelephone, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-600  py-4 text-white">
      <div className="grid grid-cols-4 p-6">
        <div>
          <div className="rounded-full flex">
            <img src={Logo} alt="logo" className="w-14 h-14 rounded-full " />
            <p className="mt-4 font-bold text-2xl">
              {" "}
              <span className="text-yellow-600">Electro</span>
              <span className="text-red-500">Hub</span>
            </p>
          </div>
          <p className="text-sm font-semibold me-8 text-yellow-500">
            <span className="text-red-500">Our mission</span> is to provide you
            with the best in electronics.
          </p>
        </div>
        <div>
          <p className="mb-4 mt-2 flex text-red-500 font-bold">
            <BsTelephone color="#DC2626" className="w-6 h-6 " /> 123-456-7890
          </p>

          <div className="flex space-x-3">
            <span className="bg-transparent hover:bg-slate-800 w-8 h-8 ps-1 pt-1 rounded-full cursor-pointer">
              <FaFacebookF color="#D97706" className="w-6 h-6 " />
            </span>
            <span className="bg-transparent hover:bg-slate-800 w-8 h-8 ps-1 pt-1 rounded-full cursor-pointer">
              <BsTwitter color="#D97706" className="w-6 h-6 " />
            </span>
            <span className="bg-transparent hover:bg-slate-800 w-8 h-8 ps-1 pt-1 rounded-full cursor-pointer">
              <AiOutlineMail color="#D97706" className="w-6 h-6 " />
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-red-500 font-bold text-xl">Customer Services</h3>
          <ul className="text-yellow-500 text-sm ms-2 mt-2">
            <li>Help Center</li>
            <li>My Account</li>
            <li>Returns & Replacements</li>
          </ul>
        </div>
        <div>
          <h3 className="text-red-500 font-bold text-xl">Get to Know Us</h3>
          <ul className="text-yellow-500 text-sm ms-2 mt-2">
            <li>About us</li>
            <li>News & Article</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div className=" border-t border-slate-400 flex">
        <div className="mt-8 mb-3 ms-20 text-sm">
          <p>
            Copyright &copy; 2023 - ElectroHub. All rights reserved
            <a href="" className="ps-28 me-2">
              Privacy Policy ||
            </a>{" "}
            <a href="#" className="me-2">
              Terms and Conditions ||
            </a>{" "}
            <a href="">Cookie</a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
