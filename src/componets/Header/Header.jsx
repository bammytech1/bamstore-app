import logo from "../../assets/bammylogo.png";
import user from "../../assets/user.svg";
import bag from "../../assets/bag-2.svg";
import search from "../../assets/search-normal.svg";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import { TECollapse, TERipple } from "tw-elements-react";


// import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
// import { motion } from "framer-motion";

function Header() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <header className="relative  bg-light w-full p-2 md:p-4  flex justify-center items-center md:fixed z-[9999] ">
      <nav className="container max-w-7xl p-1 bg-white flex  font-medium justify-between  w-full  items-center">
        <div className=" z-50  md:w-auto w-full flex justify-between items-center">
          <Link onClick={() => closeMenu()} to="/#" smooth>
            <img className="logo w-24 md:cursor-pointer" src={logo} alt="Bamstore Logo" />
          </Link>
          <div className="text-3xl md:hidden " onClick={() => setOpen(!open)}>
            <ion-icon size='large' name={`${open ? "close" : "menu"}`} ></ion-icon>
          </div>
        </div>
        <ul className=" md:flex hidden  items-center gap-4">
          <NavLink />
        </ul>
        <div className="md:flex hidden gap-6 justify-between items-center">
          <img src={bag} alt="" />
          <TERipple rippleColor="light">
            <img src={search} alt="" 
            onClick={toggleShow} />
          </TERipple>
          <img src={user} alt="" />
        </div>
        
        

        {/*mobile */}

        <ul
          className={`
                md:hidden bg-light top-20   absolute w-full h-screen bottom-0  pl-10 duration-500 ${
                  open ? "left-0" : "left-[-100%]"
                }
                `}
        >
          <NavLink />
        </ul>
      </nav>
      <TECollapse show={show}>
          <div className="absolute bg-light p-6 top-20  left-0 w-full mb-3  mx-auto">
                  <span onClick={toggleShow}  className="container max-w-6xl left-0 right-0 m-auto mb-4 flex justify-end "><ion-icon  size="large" name="close-outline"></ion-icon></span>
                  
                  <div className="container max-w-6xl relative left-0 right-0 m-auto mb-4 flex w-full flex-wrap items-stretch">
                      <input
                          type="search"
                          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="button-addon3" />

                      {/* <!--Search button--> */}
                      <TERipple>
                        <button
                            className="relative z-[2] rounded-r border-2 border-pry px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            type="button"
                            id="button-addon3">
                            Search
                        </button>
                      </TERipple>
                  </div>
          </div>
          
        </TECollapse>
    </header>
  );
}

export default Header;
