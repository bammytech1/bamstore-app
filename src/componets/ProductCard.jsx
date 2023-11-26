import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from "react-icons/io5";
import { NewItems } from "../datas/productData";
import { shortenText } from "../utils";
import ReactStars from "react-rating-stars-component";

const ProductCard = (props) => {
  const { image, title, description, price, stock } = props.itemList;

  let textInputs;
  if (stock === 0) {
    textInputs = (
      <span className="w-full  flex items-center gap-1 text-red-900">
        <IoCloseCircleSharp />
        Out of Stock
      </span>
    );
  } else if (stock > 0) {
    textInputs = (
      <span className="  flex items-center gap-1 text-dark">
        <IoCheckmarkCircleSharp />
        in Stock
      </span>
    );
  }
  return (
    <>
      {/*<!-- Component: E-commerce card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <Link to="product/:id" className="relative">
          <img src={image} alt="card image" className="aspect-video w-full" />
          {textInputs && (
            <span className="absolute bg-gray-bk rounded-br-lg p-1  top-0 left-0 flex items-center gap-1 text-dark">
              {textInputs}
            </span>
          )}
        </Link>
        {/*  <!-- Body--> */}
        <div className="p-4">
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            value="3"
          />
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">{title}</h3>
            <p className=" text-slate-400">
              <span>&#8358;</span>
              {price}
            </p>
          </header>
          <p>{shortenText(description, 40)}</p>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="w-full flex justify-between px-6 mb-4 item-center  ">
          <Link
            type="button"
            className="btn btn-primary"
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1 }}
            to="/product"
          >
            Buy Now
          </Link>
          <motion.div
            whileHover={{ rotate: 45 }}
            whileTap={{ scale: 1 }}
            to="/"
          >
            <ion-icon
              size="large"
              name="add-circle-outline"
              style={{ color: "pry-color" }}
            ></ion-icon>
          </motion.div>
        </div>
      </div>
      {/*<!-- End E-commerce card --> */}
    </>
  );
};

export default ProductCard;
