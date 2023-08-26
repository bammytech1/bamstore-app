import logo from "../../assets/bammylogo.png";
import user from "../../assets/user.svg";
import bag from "../../assets/bag-2.svg";
import search from "../../assets/search-normal.svg";

import "./Header.scss";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { motion } from "framer-motion";
// import NavLinks from "./NavLinks";

function Header() {
  const [show, setShow] = useState(false);

  function showMenu() {
    return setShow(!show);
  }

  function closeMenu() {
    return setShow(false);
  }

  return (
    <header className=" bg-light w-full h-16 p-10 flex justify-center fixed ">
      <nav className="bg-light w-full max-w-7xl flex justify-between items-center ">
        <Link onClick={() => closeMenu()} to="/#" smooth>
          <img className="logo w-24 md:cursor-pointer" src={logo} alt="Bamstore Logo" />
        </Link>
        {/* <NavLinks  /> */}
        <div className={show ? "links active " : "flex gap-6 links"}>
          <Link onClick={() => showMenu()} to="#phone" smooth>
            Phones
          </Link>
          <Link onClick={() => showMenu()} to="#laptop">
            Laptops
          </Link>
          <Link onClick={() => showMenu()} to="#gaming">
            Gaming
          </Link>
          <Link onClick={() => showMenu()} to="#cases">
            Protective Cases
          </Link>
          <Link onClick={() => showMenu()} to="#mounts">
            Mounts
          </Link>
          <Link onClick={() => showMenu()} to="#accessories">
            Accessories
          </Link>
          <Link to="#contact" className="contact">
            Contact
          </Link>
        </div>
        <div className=" flex justify-between justify-self-end gap-3 ">
        <Link to="/" smooth>
            <img className="w-6 h-6" src={bag} alt="dd" />
          </Link>
          
          <Link to="/" smooth>
            <img className="w-6 h-6" src={search} alt="dd" />
          </Link>
          <Link to="/" smooth>
            <img className="w-6 h-6" src={user} alt="dd" />
          </Link>
          
        </div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          className={(show && "menu-icon active") || "menu-icon"}
          onClick={() => showMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </nav>
    </header>
  );
}

export default Header;
