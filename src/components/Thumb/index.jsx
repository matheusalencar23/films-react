import React from "react";
// Style
import { Image } from "./Thumb.style";
// Route
import { Link } from "react-router-dom";

function Thumb({ image, titleMovie, movieId, clickable }) {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image
            src={image}
            alt="movie-thumb"
            title={titleMovie ? titleMovie : "movie"}
          />
        </Link>
      ) : (
        <Image
          src={image}
          alt="movie-thumb"
          title={titleMovie ? titleMovie : "movie"}
        />
      )}
    </div>
  );
}

export default Thumb;
