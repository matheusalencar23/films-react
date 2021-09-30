import React, { useState, useEffect, useRef } from "react";
// Style
import { Wrapper, Content } from "./SearchBar.style";
// Image
import searchIcon from "../../images/search-icon.svg";

function SearchBar({ setSearchTerm }) {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Buscar filme"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </Content>
    </Wrapper>
  );
}

export default SearchBar;
