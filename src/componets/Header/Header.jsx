import logo from "../../assets/bammylogo.png";
import user from "../../assets/user.svg";
import bag from "../../assets/bag-2.svg";
import search from "../../assets/search-normal.svg";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

// import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
// import { motion } from "framer-motion";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="  bg-light w-full px-4 py-4  flex justify-center items-center md:fixed z-[9999] ">
      <nav className="container max-w-7xl p-1 bg-white flex item-center font-medium justify-between  w-full  items-center">
        <div className=" z-50  md:w-auto w-full flex justify-between items-center">
          <Link onClick={() => closeMenu()} to="/#" smooth>
            <img className="logo w-24 md:cursor-pointer" src={logo} alt="Bamstore Logo" />
          </Link>
          <div className="text-3xl md:hidden " onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`} ></ion-icon>
          </div>
        </div>
        <ul className=" md:flex hidden  items-center gap-8">
          <li>Home</li>
          <NavLink />
        </ul>
        <div className="md:flex hidden gap-6 justify-between items-center">
          <img src={bag} alt="" />
          <img src={search} alt="" />
          <img src={user} alt="" />
        </div>

        {/*mobile */}

        <ul
          className={`
                md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-10 duration-500 ${
                  open ? "left-0" : "left-[-100%]"
                }
                `}
        >
          <NavLink />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
