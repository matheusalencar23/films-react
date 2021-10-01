import React from "react";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Style
import { Wrapper, Content, Text } from "./MovieInfo.style";
// Image
import NoImage from "../../images/no_image.jpg";
// Components
import Thumb from "../Thumb";

function MovieInfo({ movie }) {
  function renderDirectors() {
    if (!!movie && !!movie.directors && movie.directors.length > 0) {
      return (
        <div className="directors">
          <h3>DIREÇÃO</h3>
          {movie.directors.map((dir) => {
            return <p key={dir.credit_id}>{dir.name}</p>;
          })}
        </div>
      );
    }
  }

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="movie-thumb"
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>ENREDO</h3>
          <p>{movie.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>AVALIAÇÃO</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            {renderDirectors()}
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
}

export default MovieInfo;
