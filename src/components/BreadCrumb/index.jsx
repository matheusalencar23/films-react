import React from "react";
import PropTypes from "prop-types";
// Route
import { Link } from "react-router-dom";
// Style
import { Wrapper, Content } from "./BreadCrumb.style";

function BreadCrumb({ movieTitle }) {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
}

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string,
};

export default BreadCrumb;
