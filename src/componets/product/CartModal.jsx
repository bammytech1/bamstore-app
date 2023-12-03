import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  itemTotalQuantity,
} from "../../redux/features/cartSlice";
import { Popover } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const CartModal = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleOpenBag = () => {
    navigate("/cart");
  };

  return (
    <>
      <main className=" flex flex-col gap-6 ">
        <section className=" bg-white   mt-5 ">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-[400px] flex flex-col items-center justify-center">
              {cart.cartItems.length === 0 ? (
                <div>
                  <p>Your cart is empty</p>
                  <div>
                    <Link to="/product">
                      <p>Shop ITEMS</p>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="w-full max-h-[600px] overflow-y-scroll mx-auto max-w-md mt-8">
                  <div className="bg-white shadow">
                    <div className="px-4 py-6 sm:px-8 sm:py-10 bg-gray-bk mb-60 ">
                      <div className="flow-root">
                        <ul className="-my-8">
                          {cart.cartItems?.map((cartItem) => {
                            return (
                              <li
                                key={cartItem.id}
                                className="flex  space-y-3 py-6 text-left "
                              >
                                <div className="shrink-0 relative">
                                  <img
                                    className="bg-white p-2 h-24 w-24 max-w-full rounded-lg object-contain"
                                    src={cartItem.image}
                                    alt=""
                                  />
                                  <div className="sm:order-1 absolute top-0 right-0 ">
                                    <div className=" flex  items-center justify-center  rounded-md p-1 text-xs uppercase transition">
                                      {cartItem.cartQuantity}
                                    </div>
                                  </div>
                                </div>

                                <div className=" p-2 relative flex flex-1 flex-col justify-between">
                                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                    <div className="pr-8 sm:pr-5">
                                      <p className="text-base font-semibold text-gray-900">
                                        {cartItem.name}
                                      </p>
                                      <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                        <span>&#8358;</span>
                                        {cartItem.price}
                                      </p>
                                    </div>

                                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                      <p className="shrink-0  text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                        <span>&#8358;</span>
                                        {cartItem.price}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                    <button
                                      onClick={() =>
                                        handleRemoveFromCart(cartItem)
                                      }
                                      type="button"
                                      className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                                    >
                                      <svg
                                        className="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"
                                          className=""
                                        ></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                                {/* <span className="bg-black w-full h-1"></span> */}
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div className="absolute bottom-0 left-0 p-4 bg-neutral w-full">
                        <div className="mt-6 flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">
                            Total
                          </p>
                          <p className="text-2xl font-semibold text-gray-900">
                            <span className="text-xs font-normal text-gray-400">
                              <span>&#8358;</span>
                            </span>{" "}
                            {cart.cartTotalAmount}
                          </p>
                        </div>

                        <div className="mt-6 flex flex-col justify-between gap-3 text-center">
                          <button
                            type="button"
                            className="btn btn-primary w-full"
                          >
                            Checkout
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </button>
                          <Popover.Button
                            type="btn"
                            className="btn"
                            onClick={() => handleOpenBag()}
                          >
                            Open Bag
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CartModal;
