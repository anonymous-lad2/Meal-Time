import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { homeCards } from "../utility/assets"; // Ensure homeCards contains image URLs, titles, and descriptions
import Header from "../components/Header"; // Adjust the path if needed

const Home = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Carousel */}
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        emulateTouch={true}
        interval={3000}
        className="h-screen relative"
      >
        {homeCards.map((data, index) => (
          <div
            key={index}
            className="relative w-full h-screen bg-cover bg-center"
          >

            {/* Header */}
            <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} className='w-full'/>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 text-white">
              <h1 className="text-4xl font-bold">{data.title}</h1>
              <p className="mt-4 text-lg">{data.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
