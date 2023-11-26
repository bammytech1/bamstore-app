import React from "react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavList = () => {
  return (
    <>
      <ul className="w-full text-sm text-gray-500  mt-4 flex flex-col gap-2 justify-start md:items-center md:flex-row md:mt-0">
        <Link>Monitor</Link>
        <Link>Speaker</Link>
        <Link>Keyboard</Link>
        <Link>Gaming</Link>
        <Link>Desk</Link>
        <Link>Ergonomic Chair</Link>
        <Link>All Products</Link>
        <Link>Contact</Link>
      </ul>
    </>
  );
};
