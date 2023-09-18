import logo from "../../assets/bammylogo.png";
import user from "../../assets/user.svg";
import bag from "../../assets/bag-2.svg";
import search from "../../assets/search-normal.svg";
import NavLink from "./NavLink";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  IoBagOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoPerson,
} from "react-icons/io5";
import { TECollapse, TERipple } from "tw-elements-react";
import { useState } from "react";
import { RESET_AUTH, logout } from "../../redux/features/auth/authSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";
// import { motion } from "framer-motion";

function Header() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutUser = async () => {
    await dispatch(logout());
    await dispatch(RESET_AUTH());
    navigate("/login");
  };

  return (
    <header className="fixed text-base-100  bg-gray-bk w-full p-2 md:p-4  flex justify-center items-center  md:fixed z-[9999]  box-shadow ">
      <nav className="container max-w-7xl  p-1 flex  font-medium justify-between  w-full  items-center">
        <div className=" z-50  md:w-auto w-full flex justify-between items-center">
          <Link onClick={() => closeMenu()} to="/" smooth>
            <img
              className="logo w-[100px] md:cursor-pointer"
              src={logo}
              alt="Bamstore Logo"
            />
          </Link>
          <div className="flex md:hidden items-base justify-center gap-4">
            <ShowOnLogout>
              <Link to={"login"}>
                <IoPersonOutline style={{ fontSize: "20px" }} />
              </Link>
            </ShowOnLogout>
            <ShowOnLogin>
              <Link to={"profile"}>
                <IoPerson style={{ fontSize: "20px" }} />
              </Link>
            </ShowOnLogin>
            <Link to={"cart/:id"}>
              <IoBagOutline style={{ fontSize: "20px" }} />
            </Link>
            <div className=" md:hidden block " onClick={() => setOpen(!open)}>
              {open ? (
                <IoCloseOutline style={{ fontSize: "25px" }} />
              ) : (
                <IoMenuOutline style={{ fontSize: "25px" }} />
              )}
            </div>
          </div>
        </div>
        <ul className="md:relative md:flex  flex-wrap md:pl-2 w-full md: md:ml-4 hidden justify-start items-center gap-2">
          <NavLink />
          <Link to={"contact"} className="md:text-sm lg:text-lg">
            Contact
          </Link>
          <div className="md:flex w-[40] h-[40] place-items-end place-content-end absolute right-0 items-center  gap-4  ">
            <ShowOnLogin>
              <Link
                to={"/"}
                className="md:text-sm lg:text-lg"
                onClick={logoutUser}
              >
                Logout
              </Link>
            </ShowOnLogin>
            <ShowOnLogout>
              <Link to={"login"}>
                <IoPersonOutline style={{ fontSize: "20px" }} />
              </Link>
            </ShowOnLogout>
            <ShowOnLogin>
              <Link to={"profile"}>
                <IoPerson style={{ fontSize: "20px" }} />
              </Link>
            </ShowOnLogin>
            <IoSearchOutline
              style={{ fontSize: "20px" }}
              onClick={toggleShow}
            />
            <Link to={"cart/:id"}>
              <IoBagOutline style={{ fontSize: "20px" }} />
            </Link>
          </div>
        </ul>

        {/*mobile */}

        <ul
          className={`
                md:hidden bg-light top-14 flex flex-col items-start pr-6 font-bold  absolute  w-full h-screen bottom-0  pl-10 duration-500 ${
                  open ? "left-0" : "left-[-100%]"
                }
                `}
        >
          {/* <span className="rounded-3xl border  w-full border-pry-color ">
            <TERipple rippleColor="light">
              <img className="w-full" src={search} alt="" 
              onClick={toggleShow} />
            </TERipple>
          </span> */}
          <div className="container max-w-6xl relative left-0 right-0 top-4 mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
            />

            {/* <!--Search button--> */}
            <TERipple>
              <button
                className="relative z-[2] rounded-r border-2 border-pry px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                type="button"
                id="button-addon3"
              >
                Search
              </button>
            </TERipple>
          </div>
          <NavLink />
          <Link to={"contact"} className="font-medium">
            Contact
          </Link>
        </ul>
      </nav>
      <TECollapse show={show}>
        <div className="absolute bg-light p-6 top-10 md:top-20  left-0 w-full mb-3  mx-auto">
          <span
            onClick={toggleShow}
            className="container max-w-6xl left-0 right-0 m-auto mb-4 flex justify-start md:justify-end "
          >
            <IoCloseOutline style={{ fontSize: "20px" }} />
          </span>

          <div className="container max-w-6xl relative  left-0 right-0 m-auto mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5  block w-[1px] min-w-0 flex-auto rounded-lg border border-solid  border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
            />

            {/* <!--Search button--> */}
            <TERipple>
              <button
                className="relative z-[2] rounded-lg border-2 border-pry px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                type="button"
                id="button-addon3"
              >
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
