import React from "react";
import { useState, useEffect } from "react";
import { main_API } from "../utility/data";
import RestaurantCard from "../components/RestaurantCard";

const Main = () => {
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredList, setFilteredList] = useState([]);

  const fetchedList = async () => {
    const list = await fetch(main_API);
    const res = await list.json();

    setData(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setLoading(false);
    console.log(
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchedList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-5">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {filteredList.length > 0
          ? filteredList.map((restaurant) => (
              <div
                key={restaurant.info.id}
                className="hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
              >
                <RestaurantCard info={restaurant.info} />
              </div>
            ))
          : data.map((restaurant) => (
              <div
                key={restaurant.info.id}
                className="hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
              >
                <RestaurantCard info={restaurant.info} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Main;
