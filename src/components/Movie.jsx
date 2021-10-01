import React from "react";
//Config
// import { POSTER_SIZE, IMAGE_BASE_URL } from "../config";
// Route
import { useParams } from "react-router-dom";
//Components
// import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";
// Image
// import NoImage from "../images/no_image.jpg";

function Movie() {
  const { movieId } = useParams();
  const { state, loading, err } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (err) return <div>Algo deu errado...</div>;

  return (
    <>
      <BreadCrumb movieTitle={state.title} />
      <MovieInfo movie={state} />
    </>
  );
}

export default Movie;
