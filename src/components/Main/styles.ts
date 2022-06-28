import styled from 'styled-components';

export const Container = styled.main`
  @font-face {
    font-family: 'Carlson';
    src: url('/assets/Carlson.ttf');
  }

  background-image: url('/assets/backgroundPink.png');
  background-size: cover;
  min-height: 100vh;
  position: relative;
  padding-bottom: 2rem;

  .new {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--letter);
    padding: 0.7rem;
    margin: 2rem 0.2rem 4rem auto;
    height: 40px;
    max-width: 180px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 300ms all;

    &:hover {
      filter: brightness(0.95);
    }
  }

  .finish {
    margin-bottom: auto;
  }
`;

export const ContentStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem;

  div {
    display: flex;
    justify-content: center;

    width: 100%;
    img {
      width: 400px;
    }
  }

  .start {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 400px;
    height: 30px;
    color: white;
    font-size: 1.5rem;
    font-family: 'Alegreya';
    position: relative;

    border-radius: 10px;
    background-color: var(--letter);
    cursor: pointer;
    transition: all 300ms;

    svg {
      transition: all 300ms;
      right: 18%;
      position: absolute;
    }

    &:hover {
      filter: brightness(1.05);

      svg {
        right: 16%;
      }
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 450px));
  gap: 1rem;
  justify-content: center;

  margin-top: 3rem;
  margin-bottom: 0.7rem;
  padding: 0.2rem;

  .contentPart {
    display: flex;
  }

  h1 {
    text-align: center;
    color: white;

    width: 200px;
    background-color: var(--background);
    border-radius: 10px;
  }

  .contentName {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.5rem;

    position: relative;
    background-color: var(--details);
    box-shadow: 5px 6px var(--padrao);
    height: 55px;
    margin-top: 1rem;
    width: 100%;

    .contentText {
      display: flex;
      align-items: center;
      margin-bottom: 0;

      position: relative;
      max-height: 50px;

      .text {
        display: flex;
        color: red;
        margin-left: 0.2rem;
        margin-top: 0.4rem;
      }

      .shadow {
        position: absolute;
        color: white;
        text-shadow: 2px 2px #91b23b;
      }
    }

    img {
      color: #ed4742;
      right: 1rem;
      position: absolute;
      cursor: pointer;
      width: 25px;
      transition: 300ms all;

      &:hover {
        filter: brightness(0.85);
      }
    }

    @media (max-width: 440px) {
      width: 280px;

      img {
        right: 0.4rem;
      }
    }

    strong {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      position: absolute;

      bottom: -35%;
      margin: auto;

      p {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1rem;
        width: 25px;
        border-radius: 0.3rem;
        height: 25px;
        max-height: 25px;

        box-shadow: 0px 0px transparent;
        -webkit-text-stroke-width: 0px;
      }

      .cancelar {
        color: white;
        padding-top: 1px;
        background-color: red;
        cursor: pointer;
      }

      .excluir {
        color: white;
        padding-top: 1px;
        background-color: var(--letter);
        cursor: pointer;
      }
    }
  }
`;
