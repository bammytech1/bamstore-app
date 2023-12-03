import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useGetAllProductsQuery } from "../redux/features/product/productsApi";

export default function BreadCrumb(props) {
  const { data, error, isLoading } = useGetAllProductsQuery(props.itemList);
  const product = data;
  console.log(product);
  return (
    <nav className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/product"}>Store</Link>
        </li>
        <li>Add Document</li>
      </ul>
    </nav>
  );
}
