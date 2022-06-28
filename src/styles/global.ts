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

    scroll-behavior: smooth;
    font-family: 'Alegreya';    
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

  .overlayModal {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    padding-bottom: 150vmax;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .modalContent {
    display: flex;
    align-items: center;
    height: 200px;
    position: relative;
    padding: 1rem 2rem;
    background: var(--colorbackground);
    border-radius: 0.25rem;
  } 

  .hidden {
    display: none  !important;
  }
`;
