import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
      font-family: 'Montserrat', sans-serif;
      overflow-x: hidden;
  }

  a{
    text-decoration: none;
    color: #8c8c8c;
}

a:hover {
    color: #e89b99;
}

.header-sale{
    border-left: 1px solid #f2f2f2;
    color: #ff6666;
    margin-left: 25px;
}

@media screen and (max-width: 800px) {
    .banner {
        width: 100%;
    }
}

@media screen and (max-width: 1190px) {
    .banner {
        width: 100%;
    }
}

@media screen and (min-width: 1200px) {
    .banner {
        width: 100%;
    }
}

@media screen and (max-width: 450px) {
    .banner {
        width: 103%;
    }
  }
`;
