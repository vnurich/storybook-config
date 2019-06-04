import { css, createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    ${props => props.isDebug
      ? css`
        background-color: black !important;
        border: 1px solid red !important;
      `
      : null
    }
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: ${theme.font.family.main};
    padding: 0;
    margin: 0;
    position: relative;
    font-size: ${theme.font.size.sm}rem;
  }

`;

export default GlobalStyle;
