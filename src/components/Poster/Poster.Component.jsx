import React from "react";
import { Link } from "react-router-dom";

const MoviePoster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={props.poster_path ? `https://image.tmdb.org/t/p/original${props.poster_path}` : "http://www.filmfodder.com/reviews/images/poster-not-available.jpg"}
            alt="poster"
            className="w-full h-full rounded-md"
          />
        </div>
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          <p className=" cursor-pointer w-[210px] text-ellipsis overflow-hidden whitespace-nowrap" title={`${props.original_title}  ${props.original_language !== "en" ? "- " + props.title : ""}`}>
          {props.title}
          </p>
        </h3>

      </div>
    </Link>
  );
};

const PlayPoster = (props) => {
  return (
      <div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80 w-50">
          <img
            src={props.poster_path ? `https://image.tmdb.org/t/p/original${props.poster_path}` : "http://www.filmfodder.com/reviews/images/poster-not-available.jpg"}
            alt="poster"
            className="w-full h-full rounded-md object-cover object-center"
          />
        </div>
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          <p className=" cursor-pointer w-[210px] text-ellipsis overflow-hidden whitespace-nowrap" title={`${props.original_name}  ${props.original_language !== "en" ? "- " + props.name : ""}`}>
          {/* {(props.original_name.length > 20) ? props.original_name.slice(0, 20) + "..." : props.original_name } */}
          {props.name}
          </p>
        </h3>
      </div>
  );
};

const Poster = (props) => {
  if (props.isPlay) {
    return <PlayPoster {...props} />;
  }
  return <MoviePoster {...props} />;
};

export default Poster;
