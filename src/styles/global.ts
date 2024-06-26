import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
  }

  :root {
    --background: #fe5949;
    --red: #E4594E;
    --padrao: #FFC368;
    --letter: #87A634;
    --details: #FFE4B1;
  }

  html {
    @font-face {
      font-family: 'Alegreya';
      src: url('/assets/alegreya-sans-sc-black.ttf');
    }

    overflow-x: hidden;
    scroll-behavior: smooth;
    font-family: 'Alegreya';

    body {
      background-image: url('/assets/backgroundPink.png');
      background-size: cover;
    }

    
    &::-webkit-scrollbar{
      width: 12px;
      background: #E1432F;
    }

    &::-webkit-scrollbar-thumb{
      border: 1px solid rgba(0, 0, 0, 0.2);
      background-color: #E1433F;
    } 
    
  }

  @media (max-width: 1000px) {
    html{
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html{
      font-size: 87.5%;
    }
  }

  @media (max-width: 450px) {
    html{
      font-size: 80%;
    }
  }
  
  a {
    display: inline-flex;
    color: inherit;
    text-decoration: none;
  }

  .animationContadorUp {
    transition: all 200ms;
    margin-top: 200%;
  }

  .animationContadorDow {
    transition: all 200ms;
    margin-top: -200%;
  }

  .mt-5rem {
    margin-top: -5rem;
  }

  .hidden {
    display: none  !important;
  }
`;
