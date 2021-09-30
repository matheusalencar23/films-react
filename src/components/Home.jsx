import React, { useEffect, useState } from "react";

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";
// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import NoImage from "../images/no_image.jpg";

function Home() {
  const [indexHeroImage, setIndexHeroImage] = useState(0);
  const { state, loading, err, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndexHeroImage((value) => (value === 19 ? 0 : value + 1));
    }, 15000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (err) {
    return <div>Algo deu errado...</div>;
  }

  return (
    <>
      {!searchTerm && state.results[indexHeroImage] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[indexHeroImage].backdrop_path}`}
          title={state.results[indexHeroImage].title}
          text={state.results[indexHeroImage].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={!searchTerm ? "Mais populares" : "Resultado da busca"}>
        {state.results.map((movie) => {
          return (
            <Thumb
              key={movie.id}
              clickable
              titleMovie={movie.title}
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
      {state.page < state.total_pages && !loading && (
        <Button text="Mais..." callback={() => setIsLoadingMore(true)} />
      )}
      {loading && <Spinner />}
    </>
  );
}

export default Home;
