import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import Navlink from "./NavLink";
import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [visible, setVisisble] = useState(false);

  const { setShowSearch, getCarCount } = useContext(ShopContext);

  return (
    <nav className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <Navlink to="" title="HOME" />
        <Navlink to="collection" title="COLLECTION" />
        <Navlink to="about" title="ABOUT" />
        <Navlink to="contact" title="CONTACT" />
      </ul>
      <section className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />
        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <ul className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
              <li className=" cursor-pointer hover:text-black">My profile</li>
              <li className=" cursor-pointer hover:text-black">Orders</li>
              <li className=" cursor-pointer hover:text-black">Loguout</li>
            </ul>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCarCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisisble(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </section>
      {/** Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <nav className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisisble(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisisble(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisisble(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisisble(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisisble(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
