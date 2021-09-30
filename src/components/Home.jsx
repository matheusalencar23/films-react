import React from "react";

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import NoImage from "../images/no_image.jpg";

function Home() {
  const { state, loading, err, setSearchTerm } = useHomeFetch();

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header="Mais populares">
        {state.results.map((movie) => {
          return (
            <Thumb
              key={movie.id}
              clickable
              movieId={movie.id}
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
            />
          );
        })}
      </Grid>
      <Spinner />
    </>
  );
}

export default Home;
