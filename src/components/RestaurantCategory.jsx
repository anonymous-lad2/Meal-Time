import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  // State to track expanded categories
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleClick = (categoryTitle) => {
    setExpandedCategory((prev) => (prev === categoryTitle ? null : categoryTitle));
  };

  return (
    <div className="w-full md:w-10/12 text-left mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg">
      <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-4">
        {data.title} ({data.categories.length})
      </h1>

      {/* Categories */}
      {data.categories.map((category) => (
        <div key={category.title} className="mb-4">
          {/* Accordion Header */}
          <div
            className="flex justify-between cursor-pointer p-2 bg-gray-100 rounded-md hover:bg-gray-200"
            onClick={() => handleClick(category.title)}
          >
            <span className="text-sm sm:text-base lg:text-lg">
              {category.title} ({category.itemCards.length})
            </span>
            <span className="text-lg">
              {expandedCategory === category.title ? "🔼" : "🔽"}
            </span>
          </div>

          {/* Accordion Body */}
          {expandedCategory === category.title && (
            <ItemList items={category.itemCards} />
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategory;
