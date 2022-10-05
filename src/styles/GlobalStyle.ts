import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;

  }

  body {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
    overflow: hidden;
  }
`
