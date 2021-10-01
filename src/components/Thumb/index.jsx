import React from "react";
import PropTypes from "prop-types";
// Style
import { Wrapper, Image } from "./Thumb.style";
// Route
import { Link } from "react-router-dom";

function Thumb({ image, titleMovie, movieId, clickable }) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

Thumb.propTypes = {
  image: PropTypes.string,
  titleMovie: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
