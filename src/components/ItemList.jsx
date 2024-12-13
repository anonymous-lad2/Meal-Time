import React from "react";
import { IMAGE_URL } from "../utility/data";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/Slices/CartSlice";
import { toast } from 'react-hot-toast'

const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items)

  const addToCart = (item) => {
    dispatch(addItem(item))
    toast.success("Item added");
  }
  
  return (
    <div className="dark:text-black">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b-2 border-gray-400 py-4 flex flex-col sm:flex-row sm:space-x-4"
        >
          <div className="flex flex-col justify-center w-full md:w-10/12 overflow-hidden">

            <h1 className="font-bold text-lg sm:text-xl">
              {item?.card?.info?.name} - ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </h1>

            <p className="text-xs sm:text-sm text-gray-600">
              {item?.card?.info?.description}
            </p>

            <button
            onClick={() => addToCart(item)}
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold w-52 mt-6 mx-auto flex justify-center gap-2 
            items-center text-[12px] py-2 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            >
              Add to cart <FaCartShopping />
            </button>
          </div>

          <div className="w-36 md:w-2/12 mt-4 sm:mt-0">
            <img
              className="w-full h-auto rounded-md"
              src={`${IMAGE_URL}${item?.card?.info?.imageId}`}
              alt={item?.card?.info?.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
