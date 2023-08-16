import logo from "../../assets/bammylogo.png";
import user from "../../assets/user.svg";
import bag from "../../assets/bag-2.svg";
import search from "../../assets/search-normal.svg";

import "./Header.scss";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [show, setShow] = useState(false);

  function showMenu() {
    return setShow(!show);
  }

  function closeMenu() {
    return setShow(false);
  }

  return (
    <header className="header">
      <nav className="nav">
        <Link onClick={() => closeMenu()} to="/#" smooth>
          <img className="logo" src={logo} alt="dd" />
        </Link>
        <div className={show ? "links active" : "links"}>
          <Link onClick={() => showMenu()} to="#about" smooth>
            Phones
          </Link>
          <Link onClick={() => showMenu()} to="#service">
            Laptops
          </Link>
          <Link onClick={() => showMenu()} to="#pricing">
            Gaming
          </Link>
          <Link onClick={() => showMenu()} to="#portfolio">
            Protective Cases
          </Link>
          <Link onClick={() => showMenu()} to="#pricing">
            Mounts
          </Link>
          <Link onClick={() => showMenu()} to="#portfolio">
            Accessories
          </Link>
          <Link to="#contact" className="btn-pry">
            CONTACT
          </Link>
        </div>
        <div className="to-row">
          <Link to="/" smooth>
            <img className="icons" src={user} alt="dd" />
          </Link>
          <Link to="/" smooth>
            <img className="icons" src={search} alt="dd" />
          </Link>
          <Link to="/" smooth>
            <img className="icons" src={bag} alt="dd" />
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
