import React, { useContext } from "react";
import PaymentModel from "../PaymentModal/Payment.Component";
import { MovieContext } from "../../context/Movie.context";

const MovieInfo = ({ movie }) => {
  const { price, setIsOpen, isOpen, rentMovie, buyMovie } =
    useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {movie.original_title}
        </h1>
        {movie.original_language !== "en" ? <p className="text-white -mt-5 font-bold text-2xl ml-2">{movie.title}</p> : <></>}
        <div className="flex  flex-col gap-2 text-white">
          {movie.vote_average ? <h4>Rating: <strong>{movie.vote_average.toFixed(1)}</strong></h4> : <></>}
          <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
          <h4>
            {`${Math.floor(movie.runtime / 60)}h ${(movie.runtime % 60) > 0 ? (movie.runtime % 60) + " mins" : ""}`  } | {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={rentMovie}
            className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
          >
            Rent ₹149
          </button>
          <button
            onClick={buyMovie}
            className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
          >
            Buy ₹599
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
