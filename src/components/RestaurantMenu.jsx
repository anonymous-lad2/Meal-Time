import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { Menu_API } from "../utility/data";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showItems, setShowItems] = useState(false);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(Menu_API + resId);
    const menu = await data.json();
    setResInfo(menu.data);
    setLoading(false);
  };

  if (loading) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  return (
    <div className="max-w-screen mx-auto p-4 sm:p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">{name}</h1>
        <p className="text-lg sm:text-xl mt-2">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <p className="text-sm sm:text-base text-gray-500">
          Average Rating: {avgRating} ⭐
        </p>
      </div>

      <div className="space-y-6 dark:text-black">
        {categories &&
          categories.map((category) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={showItems}
              setShowItems={setShowItems}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
