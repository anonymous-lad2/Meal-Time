import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../components/CartItem";
import { NavLink } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, curr) =>
        acc +
        (curr?.card?.info?.price
          ? (curr?.card?.info?.price / 100) * curr.quantity
          : (curr?.card?.info?.defaultPrice / 100) * curr.quantity),
      0
    );
    setTotalAmount(total);
  }, [cartItems]);

  return (
    <div className="text-center m-auto">
      {cartItems.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cartItems.map((item) => (
              <CartItem key={item.card.info.id} item={item} />
            ))}
          </div>

          <div className="w-[100%] md:w-[40%] mt-5 flex flex-col justify-center gap-5">
            <div className="flex flex-col p-5 gap-5 my-14">
              <div className="flex flex-col gap-5 ">
                <div className="font-semibold text-xl text-green-700">
                  Your Cart
                </div>
                <div className="font-semibold text-5xl text-green-700 -mt-5">
                  Summary
                </div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl dark:text-gray-400">
                    Total Items:{" "}
                    {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold">
                <span className="text-gray-700 font-semibold dark:text-gray-400">
                  Total Amount:
                </span>{" "}
                ₹{totalAmount}
              </p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2 dark:text-gray-400">
            Your cart is empty!
          </h1>
          <NavLink to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};


export default Cart;
