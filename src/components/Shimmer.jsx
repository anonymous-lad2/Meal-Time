// ShimmerCard.js
import React from "react";

const Shimmer = () => {
  return (
    <div className="bg-gray-200 rounded-lg p-4 w-full max-w-sm animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
    </div>
  );
};

export default Shimmer;
