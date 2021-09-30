import React from "react";
// Style
import { Image } from "./Thumb.style";

function Thumb({ image, movieId, clickable }) {
  return (
    <div>
      <Image src={image} alt="movie-thumb" />
    </div>
  );
}

export default Thumb;
