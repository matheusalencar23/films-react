import React, { useState, useEffect } from "react";

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components

// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import NoImage from "../images/no_image.jpg";

function Home() {
  //   console.log(state);
  const { state, loading, err } = useHomeFetch();

  console.log(state);

  return <div>Home</div>;
}

export default Home;
