import React, { useEffect, useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";
import axios from "axios";
import { Link } from "react-router-dom";

  const HeroCarousel = () => {
    const [images, setImages] = useState([]);

      useEffect(() => {
        const requestTrendingMovies = async () => {
          const getTrendingMovies = await axios.get("/trending/all/day");
          setImages(getTrendingMovies.data.results);
        };
    
        requestTrendingMovies();
      }, []);

  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
        
          {images.map((images, index) => (
            <div className="w-full h-[50rem] px-2 py-3" key={index}>
              <Link to={`/movie/${images.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
                // title={`${images.original_title}  ${images.original_language !== "en" ? "- " + images.title : ""}`}
              />
              </Link>
            </div>
          ))}
          
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
