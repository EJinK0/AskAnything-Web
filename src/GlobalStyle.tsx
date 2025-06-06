import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    #root {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }

    body {
        font-family: Galmuri11, sans-serif;
    }

    * {
        font-family: Galmuri11, sans-serif;
        font-size: 1rem;
        box-sizing: border-box;
        resize: none;
        &:focus {
            outline: none;
        }
    }

    button {
        cursor: pointer;
        font-size: 1rem;
    }
  
  `;

export default GlobalStyle;
