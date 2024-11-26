import React from "react";
import { IMAGE_URL } from "../utility/data";

const ItemList = ({ items }) => {
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
