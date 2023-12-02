import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useGetAllProductsQuery } from "../redux/features/product/productsApi";

export default function BreadCrumb(props) {
  const { data, error, isLoading } = useGetAllProductsQuery(props.itemList);
  const product = data;
  return (
    <nav
      className=" relative top-2  flex w-full flex-wrap items-center  md:py-6 text-neutral-500  hover:text-neutral-700 focus:text-neutral-700  dark:bg-neutral-600 lg:flex-wrap lg:justify-center"
      data-te-navbar-ref
    >
      <div className="container max-w-7xl  absolute left-0 right-0 pl-6 m-auto flex w-full flex-wrap items-center justify-between ">
        <nav
          className="flex justify-center bg-grey-light w-full rounded-md"
          aria-label="breadcrumb"
        >
          <ol className="list-reset flex">
            <li>
              <Link
                to="/"
                className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200"
              >
                Home &nbsp;
              </Link>
            </li>
            <li>
              <span className="mx-2 text-neutral-500 dark:text-neutral-200">
                /
              </span>
            </li>
            <li>
              <Link
                to="/ourStore"
                className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-200"
              >
                OurStore &nbsp;
              </Link>
            </li>
            <li>
              <span className="mx-2 text-neutral-500 dark:text-neutral-200">
                /
              </span>
            </li>
            <li key={props.id}>{props.category}</li>
          </ol>
        </nav>
      </div>
    </nav>
  );
}
