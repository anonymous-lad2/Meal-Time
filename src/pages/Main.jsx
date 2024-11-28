import React from "react";
import { useState, useEffect } from "react";
import { main_API } from "../utility/data";
import RestaurantCard, { withVegLabel } from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredList, setFilteredList] = useState([]);

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  const filterTopRated = () => {
    const topRated = data.filter((item) => item.info.avgRating >= 4.5);
    setFilteredList(topRated);
  };

  const fetchedList = async () => {
    const list = await fetch(main_API);
    const res = await list.json();

    setData(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setLoading(false);
    // console.log(
    //   res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  useEffect(() => {
    fetchedList();
  }, []);

  return (
    <div className="p-4 mt-5">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6 mx-auto justify-between">
        <div className="flex gap-3 w-full sm:w-auto">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants...."
            className="text-lg sm:text-xl font-bold dark:bg-gray-600 bg-gray-400 py-1 rounded pl-3 w-full sm:w-auto focus:outline-none
              placeholder:text-gray-600 dark:placeholder:text-gray-300"
          />
          <button
            className="text-lg sm:text-xl font-bold dark:bg-gray-600 bg-gray-400 px-3 py-1 rounded dark:text-gray-300 text-gray-800"
            onClick={() => {
              const filtered = data.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filtered);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex gap-3 w-full sm:w-auto">
          <button
            className="text-lg sm:text-xl font-bold dark:bg-gray-600 bg-gray-400 px-3 py-1 rounded w-full sm:w-auto dark:text-gray-300 text-gray-800"
            onClick={() => setFilteredList(data)}
          >
            Restaurants
          </button>

          <button
            className="text-lg sm:text-xl font-bold dark:bg-gray-600 bg-gray-400 px-3 py-1 rounded w-full sm:w-auto dark:text-gray-300 text-gray-800"
            onClick={filterTopRated}
          >
            Top rated
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => <Shimmer key={index} />)
          : filteredList.length > 0
          ? filteredList.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
                className="hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
              >
                {restaurant?.info?.veg ? (
                  <RestaurantCardVeg info={restaurant.info} />
                ) : (
                  <RestaurantCard info={restaurant.info} />
                )}
              </Link>
            ))
          : data.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
                className="hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
              >
                {restaurant?.info?.veg ? (
                  <RestaurantCardVeg info={restaurant.info} />
                ) : (
                  <RestaurantCard info={restaurant.info} />
                )}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Main;
