import React from "react";
import { IMAGE_URL } from "../utility/data";

const RestaurantCard = ({ info }) => {
  const {
    name,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    sla,
  } = info;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-sm">
      <img
        src={IMAGE_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-black">{name.length > 30 ? name.substring(0, 30) + '...' : name}</h2>

        <p className="text-gray-500">
          {locality.length > 15 ? locality.substring(0, 15) + '...' : locality},
          {areaName.length > 15 ? areaName.substring(0, 15) + "..." : areaName}
        </p>

        <p className="text-gray-700">{costForTwo}</p>

        <p className="text-gray-500">
          {cuisines.length > 3
            ? cuisines.slice(0, 3).join(", ") + "..."
            : cuisines.join(", ")}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-yellow-500 font-semibold">⭐ {avgRating}</span>
          <span className="text-gray-900">{sla.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
