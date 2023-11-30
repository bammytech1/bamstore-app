import React from "react";
import GamingProduct from "../componets/GamingProduuct";
import BreadCrumb from "../componets/BreadCrumb";
import { Meta } from "../componets/Meta";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { NewItems, ProductData } from "../datas/productData";
import AllProducts from "../componets/AllProducts";
import { useGetAllProductsQuery } from "../redux/features/product/productsApi";
import { Navigate, useLocation } from "react-router";
import Filters from "../componets/Filters";

export const OurStore = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  // const {image, title, description, price, stock} = NewItems
  // const location = useLocation
  //   const handleFilter=(value, sectionId)=> {
  //     const searchParams=new URLSearchParams(location.search)
  //     let filterValue=searchParams.getAll(sectionId)

  //     if (filterValue.length > 0 && filterValue[0].split(',').includes(value)) {
  //       filterValue = filterValue[0].split(',').filter((item) => item!==value);

  //       if(filterValue.length===0){
  //         searchParams.delete(sectionId)
  //       }
  //   }
  //   else {
  //     filterValue.push(value);
  //   }

  //   if(filterValue.length>0){
  //     searchParams.set(sectionId, filterValue.join(','));

  //   }
  // const query = searchParams.toString();
  // Navigate({ search: `?${query}` });
  return (
    <>
      <Meta title={"Store"} />
      <main className=" flex  bg-gray-100 flex-col gap-6 mt-20  md:mt-24">
        <BreadCrumb title="Store" />

        <div className="w-full  mb-10 flex flex-wrap justify-center items-center">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>An error occurred...</p>
          ) : (
            <>
              <Filters />
              {/* <div className="w-full border-t border-b h-16 border-gray flex items-center justify-around">
                <h3 className="text-dark">{data.length} Products</h3>
                <div className="  p-2 flex h-full items-center gap-2 border-l border-r border-gray ">
                  <p>Sort by</p>
                  <select name="" id="" className="select select-xs">
                    <option value="manual">Featured</option>
                    <option value="best-selling" selected="selected">
                      Best Selling
                    </option>
                    <option value="tittle-ascending">
                      Alphabetically, A-Z
                    </option>
                    <option value="tittle-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="tittle-ascending">Price, low to high</option>
                    <option value="tittle-descending">
                      price, high to low
                    </option>
                  </select>
                </div>
              </div> */}
              {/* <div className="w-full text-base-100 container max-w-7xl md:flex md:justify-around  "> */}
              {/* <div className="flex max-w-[300px] flex-row border-l border-r border-b border-gray">
                  <div className=" hidden md:p-2 md:flex md:flex-col md:gap-4">
                    <div className="flex flex-col items-start gap-4 border-b border-gray bg-gray-bk p-4 ">
                      <h3 className="font-bold text-base ">
                        Shop by Categories
                      </h3>
                      <ul className="flex flex-col gap-2">
                        <li>Phones</li>
                        <li>Laptop</li>
                        <li>PowerBank</li>
                        <li>Accessories</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start gap-4 border-b border-gray  bg-gray-bk p-4 ">
                      <h3 className="font-bold text-base ">filter By</h3>
                      <div>
                        <h4>Availability</h4>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" value={""} id="" />
                          <label htmlFor="">In Stock (1)</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" value={""} id="" />
                          <label htmlFor="">Out of Stock (0)</label>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">Price</h4>
                        <div className="max-w-[300px] flex justify-center items-center  gap-2">
                          <label htmlFor="">&#8358;</label>
                          <input
                            type="text"
                            placeholder="From"
                            className="input bg-neutral input-bordered border-base-100 w-full max-w-xs"
                          />
                          <label htmlFor="">&#8358;</label>
                          <input
                            type="text"
                            placeholder="To"
                            className="input bg-neutral input-bordered border-base-100 w-full max-w-xs"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">color</h4>
                        <div className="max-w-[200px] flex justify-center items-center  gap-2">
                          <div>
                            <ul className="colors w-full list-none flex flex-wrap gap-2">
                              <li className="w-5 h-5 bg-red-700 rounded-3xl"></li>
                              <li className="w-5 h-5 bg-red-700 rounded-3xl"></li>
                              <li className="w-5 h-5 bg-red-700 rounded-3xl"></li>
                              <li className="w-5 h-5 bg-red-700 rounded-3xl"></li>
                              <li className="w-5 h-5 bg-red-700 rounded-3xl"></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">Size</h4>
                        <div className="max-w-[200px] flex justify-center items-center  gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <input type="checkbox" value={""} id="color-1" />
                              <label htmlFor="">s (2)</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input type="checkbox" value={""} id="color-2" />
                              <label htmlFor="">m (0)</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 border-b border-gray  bg-gray-bk p-4 ">
                      <h3 className="font-bold text-base ">Product Tags</h3>
                      <ul className="flex flex-col gap-2">
                        <li>Phone</li>
                        <li>Laptop</li>
                        <li>PowerBank</li>
                        <li>Accessories</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start gap-4 bg-gray-bk p-4 rounded-lg">
                      <h3 className="font-bold text-base ">Random Product</h3>
                      <ul className="flex flex-col gap-2">
                        <li>Phone</li>
                        <li>Laptop</li>
                        <li>PowerBank</li>
                        <li>Accessories</li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              {/* <section className="">
                  <AllProducts />
                </section> */}
              {/* </div> */}
            </>
          )}
        </div>
      </main>
    </>
  );
};
