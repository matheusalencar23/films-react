import React from "react";
// Style
import { Wrapper, Content } from "./MovieInfoBar.style";
// Helper
import { calcTime, convertMoney } from "../../helpers";

function MovieInfoBar({ time, budget, revenue }) {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Duração: {time ? calcTime(time) : "Informação indisponível"}</p>
        </div>
        <div className="column">
          <p>Orçamento: {budget ? convertMoney(budget) : "Informação indisponível"}</p>
        </div>
        <div className="column">
          <p>Receita: {revenue ? convertMoney(revenue) : "Informação indisponível"}</p>
        </div>
      </Content>
    </Wrapper>
  );
}

export default MovieInfoBar;
