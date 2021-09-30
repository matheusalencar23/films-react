import React from "react";
// Style
import { Image } from "./Thumb.style";

function Thumb({ image, titleMovie, movieId, clickable }) {
  return (
    <div>
      <Image
        src={image}
        alt="movie-thumb"
        title={titleMovie ? titleMovie : "movie"}
      />
    </div>
  );
}

export default Thumb;
