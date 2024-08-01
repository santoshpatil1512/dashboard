import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #1f1f1f;
    color: #ffffff;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
