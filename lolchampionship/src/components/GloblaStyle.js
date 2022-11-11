import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    line-height:100%;
    margin:0;
  }

`;

export default GlobalStyle;