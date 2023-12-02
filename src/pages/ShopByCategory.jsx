import React, { Fragment } from "react";
import { useGetAllProductsQuery } from "../redux/features/product/productsApi";
import CardProducts from "../componets/product/CardProducts";
import { shortenText } from "../utils";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import {
  IoCartOutline,
  IoCheckmarkCircleSharp,
  IoCloseCircleSharp,
} from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import BreadCrumb from "../componets/BreadCrumb";

const ShopByCategory = (props) => {
  console.log(props);
  const { data, error, isLoading } = useGetAllProductsQuery(props.itemList);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (itemList) => {
    dispatch(addToCart(itemList));
    navigate("/cart");
  };

  return (
    <>
      <div className="flex pb-24  bg-gray-100 flex-col items-center gap-6 mt-20  md:mt-24  ">
        <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* <img className="w-full object-contain" src={props.banner} alt="" /> */}
          <h1 className="bg-pry-deep w-full text-neutral p-4 text-2xl text-left capitalize">
            {props.category}
          </h1>
          <div className="pt-2 md:pt-4 grid  justify-between overflow-auto   grid-cols-2 gap-2 md:gap-2 md:grid-cols-3 lg:grid-cols-4 ">
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>An error occurred...</p>
            ) : (
              <>
                {data?.map((itemList, i) => {
                  if (props.category === itemList.category) {
                    return (
                      <Fragment key={i}>
                        {/*<!-- Component: E-commerce card --> */}
                        <div className="relative h-fit overflow-hidden  text-slate-500  p-2">
                          {/*  <!-- Image --> */}
                          <div className="w-full   ">
                            <img
                              src={itemList.image}
                              alt="card image"
                              className=" aspect-[3/2] object-contain w-full h-auto"
                            />
                            {/* <span className="absolute bg-black rounded-br-lg p-1  top-0 left-0 flex items-center gap-1 text-dark">
                              {itemList.stock}
                            </span> */}
                          </div>
                          {/*  <!-- Body--> */}
                          <div className="p-2  flex flex-col gap-1">
                            {/* <ReactStars
                          count={5}
                          // onChange={ratingChanged}
                          size={20}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#ffd700"
                          value="3"
                        /> */}
                            <div className="flex flex-col gap-1">
                              <h3 className="text-lg font-bold text-slate-700">
                                {itemList.name}
                              </h3>
                              <p className=" text-slate-400">
                                <span>&#8358;</span>
                                {itemList.price}
                              </p>
                              <p className="text-xs">
                                {shortenText(itemList.description, 25)}
                              </p>
                            </div>
                          </div>
                          {/*  <!-- Action base sized basic button --> */}
                          <div className="w-full flex justify-start items-center  mb-4 ml-2  ">
                            <button
                              type="button"
                              onClick={() => handleAddToCart(itemList)}
                              className="btn btn-outline text-pry-deep  font-normal  capitalize"
                            >
                              Add
                              <motion.div
                                whileHover={{ rotate: 45 }}
                                whileTap={{ scale: 1 }}
                                to="/"
                              >
                                <IoCartOutline className="text-2xl" />
                              </motion.div>
                            </button>
                          </div>
                        </div>
                        {/*<!-- End E-commerce card --> */}
                      </Fragment>
                    );
                  } else {
                    return null;
                  }
                })}
              </>
            )}
          </div>
        </div>
        <div className="join space-x-8">
          <button className="join-item btn btn-primary">1</button>
          <button className="join-item btn btn-secondary">2</button>
          <button className="join-item btn btn-primary">3</button>
          <button className="join-item btn btn-primary">4</button>
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
