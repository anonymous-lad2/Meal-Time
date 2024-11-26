import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
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
  // console.log(resId)

  const fetchMenu = async () => {
    const data = await fetch(Menu_API + resId);
    const menu = await data.json();
    setResInfo(menu.data);
    // console.log(menu.data);
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

    // console.log(categories)
  return (
    <div className="m-auto text-center mt-5">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories && categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={showItems}
          setShowItems = {setShowItems}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu