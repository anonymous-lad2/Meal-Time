import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img from "../utility/images/network.jpg";
import { reviews } from "../utility/assets";

const Testimonial = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between gap-8 p-4 bg-gray-100 dark:bg-gray-900">
      {/* Left Section: Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={img}
          alt="Network"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Right Section: Testimonial Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-gray-200">
          Testimonial
        </h1>
        <h2 className="text-xl lg:text-2xl mt-2 text-gray-600 dark:text-gray-400">
          What Our Customers Are Saying
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-lg">
          We value the trust our customers place in us, and their feedback drives us to
          continuously improve. From exceptional service to delightful experiences, our
          patrons are at the heart of everything we do.
        </p>

        {/* Carousel */}
        <div className="w-full mt-6">
          <Carousel
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            emulateTouch={true}
            interval={3000}
            className="rounded-lg"
          >
            {reviews.map((data, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:items-start gap-4"
              >
                {/* Image */}
                <img
                  src={data.image}
                  alt={data.name}
                  className="h-30 w-30 md:h-30 md:w-30 lg:h-50 lg:w-40 rounded-full object-cover border-2 border-gray-300 dark:border-gray-700"
                />

                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {data.name}
                  </h3>
                  <p className="mt-4 text-gray-700 dark:text-gray-300 text-center lg:text-left">
                    {data.review}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
