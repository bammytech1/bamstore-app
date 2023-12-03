import React from "react";
import GamingProduct from "../componets/home/GamingProduuct";
import BreadCrumb from "../componets/BreadCrumb";
import { Meta } from "../componets/Meta";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { NewItems, ProductData } from "../datas/productData";
import AllProducts from "../componets/product/AllProducts";
import { useGetAllProductsQuery } from "../redux/features/product/productsApi";
import { Navigate, useLocation } from "react-router";

export const OurStore = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <>
      <Meta title={"Store"} />
      <main className=" flex  bg-gray-100 flex-col gap-6 mt-20  md:mt-24">
        <div className="w-full  mb-10 flex flex-wrap justify-center items-center">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>An error occurred...</p>
          ) : (
            <>
              <AllProducts {...data} />
            </>
          )}
        </div>
      </main>
    </>
  );
};
