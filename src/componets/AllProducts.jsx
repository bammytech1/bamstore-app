import { useGetAllProductsQuery } from "../redux/features/product/productsApi";
// import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from "react-icons/io5";
import { shortenText } from "../utils";
import ReactStars from "react-rating-stars-component";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (itemList) => {
    dispatch(addToCart(itemList));
    navigate("/cart");
  };

  let textInputs;
  if (data.stock === 0) {
    textInputs = (
      <span className="w-full  flex justify-between items-center gap-1 text-red-900">
        <IoCloseCircleSharp />
        <p className="text-[10px]">Out of Stock</p>
      </span>
    );
  } else if (data.stock > 0) {
    textInputs = (
      <span className="  flex items-center gap-1 text-dark">
        <IoCheckmarkCircleSharp />
        <p className="text-[10px]">in Stock</p>
      </span>
    );
  }

  return (
    <section className="w-full   flex justify-center  ">
      <div className="container max-w-7xl flex flex-col item-center justify-center gap-8 p-6 ">
        <div className="w-full bg-pry-deep p-2">
          <h2 className=" max-w-3xl w-full  text-light text-left font-normal text-base md:text-lg">
            Monitor
          </h2>
        </div>

        <div className="grid  justify-between overflow-auto  grid-cols-2 gap-2 md:gap-6 md:grid-cols-3 lg:grid-cols-4 ">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>An error occurred...</p>
          ) : (
            <>
              {data?.map((itemList) => {
                return (
                  <Fragment key={itemList.id}>
                    {/*<!-- Component: E-commerce card --> */}
                    <div className="relative h-fit overflow-hidden rounded-2xl border bg-white text-slate-500 shadow-md shadow-slate-200 p-2">
                      {/*  <!-- Image --> */}
                      <div className="w-full  ">
                        <img
                          src={itemList.image}
                          alt="card image"
                          className="aspect-video object-contain w-full h-auto"
                        />
                        {textInputs && (
                          <span className="absolute bg-gray-bk rounded-br-lg p-1  top-0 left-0 flex items-center gap-1 text-dark">
                            {textInputs}
                          </span>
                        )}
                      </div>
                      {/*  <!-- Body--> */}
                      <div className="p-2  flex flex-col gap-1">
                        <ReactStars
                          count={5}
                          // onChange={ratingChanged}
                          size={20}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#ffd700"
                          value="3"
                        />
                        <div className="flex flex-col gap-1">
                          <h3 className="text-lg font-bold text-slate-700">
                            {itemList.name}
                          </h3>
                          <p className=" text-slate-400">
                            <span>&#8358;</span>
                            {itemList.price}
                          </p>
                          <p className="text-xs">
                            {shortenText(itemList.description, 20)}
                          </p>
                        </div>
                      </div>
                      {/*  <!-- Action base sized basic button --> */}
                      <div className="w-full flex justify-start items-center  mb-4 ml-2  ">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(itemList)}
                          className="btn btn-primary text-light"
                        >
                          Add to Cart
                        </button>
                        <motion.div
                          whileHover={{ rotate: 45 }}
                          whileTap={{ scale: 1 }}
                          to="/"
                        >
                          <IoCheckmarkCircleSharp className="text-2xl" />
                        </motion.div>
                      </div>
                    </div>
                    {/*<!-- End E-commerce card --> */}
                  </Fragment>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// const ProductCard = (props) => {
//   const { image, name, description, price, stock } = props.itemList;

//   const dispatch = useDispatch();
//   const handleAddToCart = (itemList) => {
//     dispatch(addToCart(itemList));
//   };

//   let textInputs;
//   if (stock === 0) {
//     textInputs = (
//       <span className="w-full  flex justify-between items-center gap-1 text-red-900">
//         <IoCloseCircleSharp />
//         <p className="text-[10px]">Out of Stock</p>
//       </span>
//     );
//   } else if (stock > 0) {
//     textInputs = (
//       <span className="  flex items-center gap-1 text-dark">
//         <IoCheckmarkCircleSharp />
//         <p className="text-[10px]">in Stock</p>
//       </span>
//     );
//   }
//   return (

//   );
// };

export default AllProducts;
