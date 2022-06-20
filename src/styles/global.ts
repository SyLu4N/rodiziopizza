import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
  }

  :root {
    --background: #FF8266;
    --padrao: #FFC368;
    --letter: #87A634;
    --details: #FFE4B1;
  }

  html {
    @font-face {
      font-family: 'Alegreya';
      src: url('/assets/alegreya-sans-sc-black.ttf');
    }

    font-family: 'Alegreya';
    
    background-image: url('/assets/backgroundImage.png');
    background-size: cover;

    body {
      max-width: 550px;
      margin: auto;
      padding-top: 1rem;
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

  .overlayModal {
    padding: 4rem;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: -4rem;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .modalContent {
    height: 200px;
    position: relative;
    padding: 1rem 2rem;
    background: var(--colorbackground);
    border-radius: 0.25rem;

    @media (max-width: 1000px) {
      height: auto;
      max-height: 300px;
    }
  }

  #flex {
    display: flex;
  }

  .hidden {
    display: none;
  }
`;
