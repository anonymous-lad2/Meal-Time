import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, addItem } from "../redux/Slices/CartSlice";
import { AiFillDelete } from "react-icons/ai";
import { IMAGE_URL } from "../utility/data";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    dispatch(addItem(item)); // Increment quantity
  };

  const decrementQuantity = () => {
    dispatch(removeItem(item.card.info.id)); // Decrement quantity or remove item
  };

  return (
    <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img
            className="object-cover"
            src={`${IMAGE_URL}${item?.card?.info?.imageId}`}
          />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold dark:text-gray-400">
            {item?.card?.info?.name}
          </h1>
          <h1 className="text-base text-slate-700 font-medium dark:text-gray-400">
            {item?.card?.info?.description}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">
              ₹ {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={incrementQuantity}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                +
              </button>
              <p className="text-lg font-bold">{item.quantity}</p>
              <button
                onClick={decrementQuantity}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
