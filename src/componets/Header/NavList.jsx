import React from "react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavList = () => {
  return (
    <>
      <ul className="w-full text-sm text-gray-500  mt-4 flex flex-col gap-2 justify-start md:items-center md:flex-row md:mt-0">
        <li>
          <Link to="/phone">Phones</Link>
        </li>
        <li>
          <Link to="/laptop">Laptops</Link>
        </li>
        <li>
          <Link to="/gaming">Gaming</Link>
        </li>
        <li>
          <Link to="/workspace">WorkSpace</Link>
        </li>
        <li>
          <Link to="/monitor">All Products</Link>
        </li>
        <li>
          <Link to="/accessories">Accessories</Link>
        </li>
        <Link>Contact</Link>
      </ul>
    </>
  );
};
