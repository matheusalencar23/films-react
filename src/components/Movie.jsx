import React from "react";
//Config
import { POSTER_SIZE, IMAGE_BASE_URL } from "../config";
// Route
import { useParams } from "react-router-dom";
//Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";
// Image
import NoImage from "../images/no_image.jpg";

function Movie() {
  const { movieId } = useParams();
  const { state, loading, err } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (err) return <div>Algo deu errado...</div>;

  console.log(state);

  return (
    <>
      <BreadCrumb movieTitle={state.title} />
      <MovieInfo movie={state} />
      <MovieInfoBar
        time={state.runtime}
        budget={state.budget}
        revenue={state.revenue}
      />
      {!!state && !!state.actors && state.actors.length && (
        <Grid header="Atores e Atrizes">
          {state.actors.map((ac) => {
            return (
              <Actor
                key={ac.cast_id}
                name={ac.name}
                character={ac.character}
                imageUrl={
                  ac.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${ac.profile_path}`
                    : NoImage
                }
              ></Actor>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default Movie;
