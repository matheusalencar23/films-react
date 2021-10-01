import React from "react";
import PropTypes from "prop-types";
// Style
import { Wrapper } from "./Button.style";

function Button({ text, callback }) {
  return (
    <Wrapper type="button" onClick={() => callback()}>
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
