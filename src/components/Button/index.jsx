import React from "react";
// Style
import { Wrapper } from "./Button.style";

function Button({ text, callback }) {
  return (
    <Wrapper type="button" onClick={() => callback()}>
      {text}
    </Wrapper>
  );
}

export default Button;
